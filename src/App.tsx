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
    path: '/Bella_Tavola_Italiana/:id',
    element: <FirstRestaurant />
  },
  {
    path: '/Casa_das_Delícias_Árabe/:id',
    element: <SecondRestaurant />
  },
  {
    path: '/Sakura_Sushi_House/:id',
    element: <ThirdRestaurant />
  },
  {
    path: '/Cantinho_Lusitano/:id',
    element: <FourthRestaurant />
  },
  {
    path: '/Piazza_del_Fornot/:id',
    element: <FifthRestaurant />
  },
  {
    path: '/Jardim_da_Terra/:id',
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
