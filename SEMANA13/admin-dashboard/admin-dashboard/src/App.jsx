import './App.css'
import { UserProvider } from './context/UserContext';
import { RouterProvider } from "react-router-dom";
import { primaryRoutes } from './routes/PrimaryRoutes'

function App() {
  return (
    <UserProvider>
      <RouterProvider router={primaryRoutes} />
    </UserProvider>
  )
}

export default App
