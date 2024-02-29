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
