import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import * as S from './styles'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()

  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderBar className={location.pathname === '/' ? 'isHome' : ''}>
        <div className="container">
          <S.HomeItems className={location.pathname === '/' ? '' : 'invisible'}>
            <S.Logo src={logo} />
            <p>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </p>
          </S.HomeItems>
          <S.CategoryItems
            className={location.pathname === '/' ? 'invisible' : ''}
          >
            <li>
              <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span />
                <span />
                <span />
              </S.Hamburguer>
            </li>
            <li className="restaurants">
              <Link to="/">Restaurantes</Link>
            </li>
            <li>
              <Link to="/">
                <S.Logo src={logo} />
              </Link>
            </li>
            <S.CartButton onClick={openCart}>
              {items.length} <span>produto(s) no carrinho</span>
              <span className="fa-solid fa-cart-shopping" />
            </S.CartButton>
          </S.CategoryItems>
          <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
            <li>
              <Link to="/">Restaurantes</Link>
            </li>
          </S.NavMobile>
        </div>
      </S.HeaderBar>
    </>
  )
}

export default Header
