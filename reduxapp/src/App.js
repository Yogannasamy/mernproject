import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



let routerPaths = createBrowserRouter([
  {"path":"/","element":<Home/>},
  {"path":"/about","element":<About/>},
  {"path":"/contact","element":<Contact/>},
  {"path":"/Header","element":<header/>}
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={routerPaths} />
    </div>
  );
}

export default App;
