// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';
const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
])
function App() {
  const getuser =async ()=>{
   let res =  await fetch("https://reqres.in/api/users")
   let serverRes = await res.json();
   console.log(serverRes['data']);

  }
  return (
    <div className="App">
      { /*<RouterProvider config = {config}/>*/}
      <Home/>
      <About/>
      

    </div>
  );
}

export default App;
