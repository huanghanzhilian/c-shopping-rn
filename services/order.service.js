import apiSlice from './api'

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOrdersList: builder.query({
      query: (page_size, page) => ({
        url: `/api/order/list`,
        method: 'GET',
        params: { page_size, page },
      }),

      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.orders.map(({ _id }) => ({
                type: 'Order',
                id: _id,
              })),
              'Order',
            ]
          : ['Order'],
    }),

    getOrders: builder.query({
      query: ({ page = 1, pageSize = 10 }) => ({
        url: `/api/order?page=${page}&page_size=${pageSize}`,
        method: 'GET',
      }),
      serializeQueryArgs: ({ queryArgs, ...rest }) => {
        const newQueryArgs = { ...queryArgs }
        if (newQueryArgs.page) {
          delete newQueryArgs.page
        }
        return newQueryArgs
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        if (currentCache) {
          newItems.data.orders.unshift(...currentCache.data.orders)
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
    }),

    getSingleOrder: builder.query({
      query: ({ id }) => ({
        url: `/api/order/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) => [{ type: 'Order', id: arg.id }],
    }),

    updateOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/order/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Order', id: arg.id }],
    }),

    createOrder: builder.mutation({
      query: ({ body }) => ({
        url: '/api/order',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
})

export const {
  useGetOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useCreateOrderMutation,
  useGetOrdersListQuery,
} = orderApiSlice
