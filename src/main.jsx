import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormRecipe from './components/FormRecipe/RecipeForm.jsx';
import Cards from './components/Cards/Cards.jsx';
import { Main } from './pages/Main.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "add_recipe",
        element: <FormRecipe />,
      },
      {
        path: "cards",
        element: <Cards />,
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
