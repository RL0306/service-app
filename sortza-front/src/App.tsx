import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Table from "./components/Table";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
