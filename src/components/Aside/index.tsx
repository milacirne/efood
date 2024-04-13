import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { AsideContainer, AsideStyleProps, Overlay, Sidebar } from './styles'
import { RootReducer } from '../../store'

interface Props extends AsideStyleProps {
  children: JSX.Element
  title?: string
  hasTitle: boolean
}

const Aside = ({ children, title, hasTitle }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <AsideContainer className={isOpen ? 'is-open' : ''} hasTitle={hasTitle}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <h2>{title}</h2>
        {children}
      </Sidebar>
    </AsideContainer>
  )
}

export default Aside
