import { Link, useLocation, useParams } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const { id } = useParams()
  const location = useLocation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const homeHeaderText =
    location.pathname === '/' ? (
      <>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </>
    ) : (
      ''
    )

  const isCategoryPage = location.pathname.startsWith(`/category/${id}`)
  const categoryRestaurantTitle = isCategoryPage ? 'Restaurantes' : ''
  const cartRestaurantTitle = isCategoryPage
    ? `${items.length} produto(s) no carrinho`
    : ''

  return (
    <>
      <S.HeaderBar className={location.pathname === '/' ? 'isHome' : ''}>
        <div
          className="container"
          style={{
            flexDirection: location.pathname === '/' ? 'column' : 'row'
          }}
        >
          <li className={isCategoryPage ? '' : 'invisible'}>
            <Link to="/">
              <a>{categoryRestaurantTitle}</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <S.Logo src={logo} />
            </Link>
          </li>
          <h2 className={isCategoryPage ? 'invisible' : ''}>
            {homeHeaderText}
          </h2>
          <li className={isCategoryPage ? '' : 'invisible'}>
            <a onClick={openCart}>{cartRestaurantTitle}</a>
          </li>
        </div>
      </S.HeaderBar>
    </>
  )
}

export default Header
