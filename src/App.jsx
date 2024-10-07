import './App.css'
import { DailyRecipe } from './components/DailyRecipe/DailyRecipe'
import Header  from './Components/Header/Header.jsx';
import MyLogin from './Components/Header/Login.jsx';


function App() {
  return (
    <>
      <DailyRecipe/>
      <Header/>
      <MyLogin />
    </>
  )
}

export default App
