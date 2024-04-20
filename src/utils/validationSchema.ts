import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { usePurchaseMutation } from '../services/api'
import { RootReducer } from '../store'

export const ValidationSchema = () => {
  const [purchase] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const form = useFormik({
    initialValues: {
      client: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      aditional: '',
      cardDisplayName: '',
      cardNumber: '',
      ccv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      client: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O nome é obrigatório'),
      address: Yup.string()
        .matches(
          /^[a-zA-Z\s]+$/,
          'O formato do endereço deve ser: "Rua/Avenida"'
        )
        .required('O endereço é obrigatório'),
      city: Yup.string()
        .min(2, 'A cidade deve ter pelo menos 2 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'A cidade só pode conter letras e espaços')
        .required('A cidade é obrigatória'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'O formato do CEP deve ser: "XXXXX-XXX"')
        .required('O CEP é obrigatório'),
      number: Yup.string()
        .matches(
          /^\d+[a-zA-Z]*$/,
          'O número do endereço deve ser um número inteiro positivo e pode conter letras'
        )
        .required('O número do endereço é obrigatório'),
      aditional: Yup.string()
        .max(50, 'O complemento não deve exceder 50 caracteres')
        .matches(
          /^[a-zA-Z0-9\s,.'-]*$/,
          'O complemento pode conter letras, números, espaços, vírgulas, pontos, apóstrofos e hifens'
        )
        .notRequired(),
      cardDisplayName: Yup.string()
        .min(2, 'O nome do titular do cartão deve ter pelo menos 2 caracteres')
        .matches(
          /^[a-zA-Z\s]+$/,
          'O nome do titular do cartão deve conter apenas letras e espaços'
        )
        .required('O nome do titular do cartão é obrigatório'),
      cardNumber: Yup.string()
        .matches(
          /^\d{13,19}$/,
          'O número do cartão deve conter entre 13 e 19 dígitos numéricos'
        )
        .required('O número do cartão é obrigatório'),
      ccv: Yup.string()
        .matches(/^\d{3,4}$/, 'O CCV deve conter 3 ou 4 dígitos')
        .required('O CCV é obrigatório'),
      expiresMonth: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])$/,
          'O mês de vencimento do cartão deve ser um número entre 01 e 12'
        )
        .required('O mês de vencimento é obrigatório'),
      expiresYear: Yup.string()
        .matches(/^\d{4}$/, 'O ano de vencimento deve conter 4 dígitos')
        .required('O ano de vencimento do cartão é obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Dados enviados:', values)
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.client,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.aditional
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.ccv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  return form
}
