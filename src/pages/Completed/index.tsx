import Aside from '../../components/Aside'
import Button from '../../components/Button'

const Completed = () => {
  return (
    <Aside title="Pedido realizado - {ORDER_ID}" hasTitle>
      <>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
          <br />
          <br /> Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button width="100%" backgroundColor="beige" customPadding="4px 0">
          Concluir
        </Button>
      </>
    </Aside>
  )
}

export default Completed
