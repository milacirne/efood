import { Provider } from 'react-redux'
import { store } from './store'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import Cart from './Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <AppRoutes />
          <Footer />
        </div>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
