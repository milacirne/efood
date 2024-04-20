import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  checkoutIsOpen: boolean
  deliveryIsOpen: boolean
  paymentIsOpen: boolean
}

const initialState: CheckoutState = {
  checkoutIsOpen: false,
  deliveryIsOpen: false,
  paymentIsOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.checkoutIsOpen = true
    },
    closeCheckout: (state) => {
      state.checkoutIsOpen = false
    },
    openDelivery: (state) => {
      state.deliveryIsOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryIsOpen = false
    },
    openPayment: (state) => {
      state.paymentIsOpen = true
    },
    closePayment: (state) => {
      state.paymentIsOpen = false
    }
  }
})

export const {
  openCheckout,
  closeCheckout,
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment
} = checkoutSlice.actions
export default checkoutSlice.reducer
