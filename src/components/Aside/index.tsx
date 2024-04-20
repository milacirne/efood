import { useDispatch } from 'react-redux'

import { closeCart } from '../../store/reducers/cart'
import { closeDelivery, closePayment } from '../../store/reducers/checkout'

import { AsideContainer, AsideStyleProps, Overlay, Sidebar } from './styles'

interface Props extends AsideStyleProps {
  children: JSX.Element
  title?: string
  className?: string
}

const Aside = ({ children, title, hasTitle, className }: Props) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeCart())
    dispatch(closeDelivery())
    dispatch(closePayment())
  }

  return (
    <AsideContainer hasTitle={hasTitle} className={className}>
      <Overlay onClick={handleClose} />
      <Sidebar>
        <h2>{title}</h2>
        {children}
      </Sidebar>
    </AsideContainer>
  )
}

export default Aside
