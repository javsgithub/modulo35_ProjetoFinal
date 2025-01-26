import { Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import FirstRestaurant from './pages/FirstRestaurant'
import SecondRestaurant from './pages/SecondRestaurant'
import ThirdRestaurant from './pages/ThirdRestaurant'
import FourthRestaurant from './pages/FourthRestaurant'
import FifthRestaurant from './pages/FifthRestaurant'
import SixthRestaurant from './pages/SixthRestaurant'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Bella_Tavola_Italiana/:id" element={<FirstRestaurant />} />
    <Route path="/Casa_das_Delícias_Árabe/:id" element={<SecondRestaurant />} />
    <Route path="/Sakura_Sushi_House/:id" element={<ThirdRestaurant />} />
    <Route path="/Cantinho_Lusitano/:id" element={<FourthRestaurant />} />
    <Route path="/Piazza_del_Fornot/:id" element={<FifthRestaurant />} />
    <Route path="/Jardim_da_Terra/:id" element={<SixthRestaurant />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesComponent />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
