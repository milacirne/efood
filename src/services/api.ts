import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HomeItemType } from '../pages/Home'
import { CategoryItemType } from '../pages/Category'

interface CardapioResponse {
  cardapio: CategoryItemType[] // Defina corretamente o tipo de CategoryItemType conforme necessário
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getCategoryBanner: builder.query<HomeItemType, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCategoryProducts: builder.query<CategoryItemType[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: CardapioResponse) => response.cardapio
    }),
    getHomeItems: builder.query<HomeItemType[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const {
  useGetCategoryBannerQuery,
  useGetCategoryProductsQuery,
  useGetHomeItemsQuery
} = api
export default api
