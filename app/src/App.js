// import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';
const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
])
function App() {
  let firstname = "yogan";
  //let email = "yogann66@gmail.com";
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const validate = ()=>{
    if(email==""){
      alert("email is empty")
    }else if(mobile=""){
      alert("mobile is empty")
    }else{
      alert("every thing is fine")
    }
  }

  return (
    <div className="App">
      { /*<RouterProvider config = {config}/>*/}
      <h1>this is react app</h1>
      <h1>{firstname}</h1>
      <hi>{email}</hi>
      <input type='text' onChange={(e)=>setEmail(e.target.value)} />
      {mobile}
      <input type='text' onChange={(e)=>setMobile(e.target.value)} />

      <button onClick={()=>validate()}>Click</button>
      <Home/>
    </div>
  );
}

export default App;
