import apiSlice from './api'

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: ({ category, page_size, page, sort, search, inStock, discount, price }) => {
        return {
          url: `/api/products`,
          method: 'GET',
          params: { category, page_size, page, sort, search, inStock, discount, price },
        }
      },
      serializeQueryArgs: ({ queryArgs, ...rest }) => {
        const newQueryArgs = { ...queryArgs }
        if (newQueryArgs.page) {
          delete newQueryArgs.page
        }
        return newQueryArgs
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        if (currentCache && currentCache.data.products !== newItems.data.products) {
          newItems.data.products.unshift(...currentCache.data.products)
          return {
            ...currentCache,
            ...newItems,
          }
        }
        return newItems
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg?.page === 1) return false
        return currentArg?.page !== previousArg?.page
      },
      providesTags: result =>
        result
          ? [
              ...result.data.products.map(({ _id }) => ({
                type: 'Product',
                id: _id,
              })),
              'Product',
            ]
          : ['Product'],
    }),

    getSingleProductDetail: builder.query({
      query: ({ id }) => ({
        url: `/api/products/itemDetail?id=${id}`,
        method: 'GET',
      }),
    }),

    getSingleProduct: builder.query({
      query: ({ id }) => ({
        url: `/api/products/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }],
    }),

    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/api/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),

    createProduct: builder.mutation({
      query: ({ body }) => ({
        url: `/api/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),

    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/products/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg.id }],
    }),
  }),
})

export const {
  useDeleteProductMutation,
  useCreateProductMutation,
  useGetProductsQuery,
  useGetSingleProductDetailQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productApiSlice
