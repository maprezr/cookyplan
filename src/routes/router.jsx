import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout.jsx';
import FormRecipe from '../components/FormRecipe/RecipeForm.jsx';
import Cards from '../components/Cards/Cards.jsx';
import { Home } from '../pages/Home.jsx'
import ErrorPage  from '../components/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // Componente que se renderiza en caso de error
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
        element: <Home />,
      }
    ],
  },
]);