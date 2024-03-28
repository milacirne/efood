import Body from '../../components/Body'
import Header from '../../components/Header'
import Product from '../../models/Product'

import japanese from '../../assets/category/japanese.png'
import marguerita from '../../assets/product/marguerita.png'

const products: Product[] = [
  {
    id: 1,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Japanese = () => {
  return (
    <>
      <Header
        category="Japonesa"
        fancyCategoryName="La Dolce Vita Trattoria"
        image={japanese}
      />
      <Body
        products={products}
        type="product"
        columns="repeat(3, 1fr)"
        rows="repeat(2, auto)"
        columnGap="40px"
        rowGap="32px"
      />
    </>
  )
}

export default Japanese
