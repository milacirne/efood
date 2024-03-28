import * as S from './styles'
import Category from '../Category'
import CategoryClass from '../../models/Category'
import Product from '../Product'
import ProductClass from '../../models/Product'
import { ListProps } from './styles'

interface BodyProps extends ListProps {
  type: 'category' | 'product'
  categories?: CategoryClass[]
  products?: ProductClass[]
}

const Body = ({
  categories,
  products,
  type,
  columns,
  rows,
  columnGap,
  rowGap
}: BodyProps) => {
  return (
    <S.Container>
      <S.List
        columns={columns}
        rows={rows}
        columnGap={columnGap}
        rowGap={rowGap}
      >
        {type === 'category' && categories
          ? categories.map((category) => (
              <Category
                key={category.id}
                image={category.image}
                tags={category.tags}
                title={category.title}
                rating={category.rating}
                description={category.description}
                to={`/${category.slug}`}
              />
            ))
          : type === 'product' && products
            ? products.map((product) => (
                <Product
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                />
              ))
            : null}
      </S.List>
    </S.Container>
  )
}

export default Body
