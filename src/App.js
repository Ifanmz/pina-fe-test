import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import SideNavigator from './components/side-nagivator'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideNavigator/>}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
