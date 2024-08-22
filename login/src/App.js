import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const validate = ()=>{
    if(email==""){
      alert("email is required")
    }else if(password=""){
      alert("password is required")
    }else{
      alert("every thing is fine")
    }
  }

  async function fetchLogin() {
    let data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    if (!data["email"] && !data["password"]) {
      alert("Enter Username and Password");
      return;
    }
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    let json = await res.json();
    console.log(json["token"]);
    if (json["token"]) {
      alert("login successful!");
    }
  }
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder='email'
      />
      <br />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        placeholder='password'
      />
      <br />
      <button onClick={()=>fetchLogin()}>Click</button>

    </div>
  );
}

export default App;
