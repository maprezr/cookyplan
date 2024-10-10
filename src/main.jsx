import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeForm from './components/FormRecipe/RecipeForm.jsx';
import { Main } from './pages/Main.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "add_recipe",
        element: <RecipeForm />,
      },
      {
        path: "main",
        element: <Main />,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
