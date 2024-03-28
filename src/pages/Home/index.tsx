import HomeHeader from '../../components/HomeHeader'
import Body from '../../components/Body'
import Category from '../../models/Category'

import japanese from '../../assets/category/japanese.png'
import italian from '../../assets/category/italian.png'

const categories: Category[] = [
  {
    id: 1,
    image: japanese,
    tags: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    slug: 'japanese'
  },
  {
    id: 2,
    image: italian,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    slug: 'italian'
  },
  {
    id: 3,
    image: italian,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    slug: 'italian'
  },
  {
    id: 4,
    image: italian,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    slug: 'italian'
  },
  {
    id: 5,
    image: italian,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    slug: 'italian'
  },
  {
    id: 6,
    image: italian,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    slug: 'italian'
  }
]

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Body
        categories={categories}
        type="category"
        columns="repeat(2, 1fr)"
        rows="repeat(3, auto)"
        columnGap="80px"
        rowGap="48px"
      />
    </>
  )
}

export default Home
