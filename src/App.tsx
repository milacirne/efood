import { Provider } from 'react-redux'
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import Cart from './pages/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
