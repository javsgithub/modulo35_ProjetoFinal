import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import FirstRestaurant from './pages/FirstRestaurant'
import SecondRestaurant from './pages/SecondRestaurant'
import ThirdRestaurant from './pages/ThirdRestaurant'
import FourthRestaurant from './pages/FourthRestaurant'
import FifthRestaurant from './pages/FifthRestaurant'
import SixthRestaurant from './pages/SixthRestaurant'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Bella_Tavola_Italiana',
    element: <FirstRestaurant />
  },
  {
    path: '/Casa_das_Delícias_Árabe',
    element: <SecondRestaurant />
  },
  {
    path: '/Sakura_Sushi_House',
    element: <ThirdRestaurant />
  },
  {
    path: '/Cantinho_Lusitano',
    element: <FourthRestaurant />
  },
  {
    path: '/Piazza_del_Fornot',
    element: <FifthRestaurant />
  },
  {
    path: '/Jardim_da_Terra',
    element: <SixthRestaurant />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
