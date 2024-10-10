import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DailyRecipe } from './components/DailyRecipe/DailyRecipe.jsx';
import FormRecipe from './components/FormRecipe/RecipeForm.jsx';
import Cards from './components/Cards/Cards.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "FormRecipe",
        element: <FormRecipe />,
      },
      {
        path: "Cards",
        element: <Cards />,
      },
      {
        path: "main",
        element: <DailyRecipe />,
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
