import { useState } from 'react'
import * as S from './styles'
import Category from '../CategoryCard'
import { CategoryType } from '../../pages/Home'
import Product from '../ProductCard'
import Modal from '../Modal'
import { ListProps } from './styles'
import { ProductType } from '../../pages/Category'

interface BodyProps extends ListProps {
  type: 'categoryCards' | 'productCards'
  data: CategoryType[] | ProductType[]
}

const Body = ({ data, type, columns, rows, columnGap, rowGap }: BodyProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  )

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product)
    setIsVisible(true)
  }

  const getCategoryTags = (category: CategoryType) => {
    const tags = []

    if (category.tipo) {
      tags.push(category.tipo)
    }

    if (category.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <S.Container>
      <S.List
        columns={columns}
        rows={rows}
        columnGap={columnGap}
        rowGap={rowGap}
      >
        {type === 'categoryCards' && data
          ? (data as CategoryType[]).map((category: CategoryType) => (
              <Category
                key={category.id}
                image={category.capa}
                tags={getCategoryTags(category)}
                title={category.titulo}
                rating={category.avaliacao}
                description={category.descricao}
                to={`/category/${category.id}`}
              />
            ))
          : type === 'productCards' && data
            ? (data as ProductType[]).map((product: ProductType) => (
                <Product
                  key={product.id}
                  image={product.foto}
                  title={product.nome}
                  description={product.descricao}
                  onClick={() => handleProductClick(product)}
                />
              ))
            : null}
        <Modal
          isVisible={isVisible}
          onClick={() => setIsVisible(false)}
          product={selectedProduct}
        />
      </S.List>
    </S.Container>
  )
}

export default Body
