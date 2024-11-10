import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import FirstRestaurant from './pages/FirstRestaurant'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/first-restaurant',
    element: <FirstRestaurant />
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
