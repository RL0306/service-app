import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
