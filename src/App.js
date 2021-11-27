import Browse from "./pages/Browse";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Submit from "./pages/Submit";


function App() {
  return (
    <div>
  
      <Header></Header>

      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Browse/>} />
      <Route path="add_new_post" element={<Submit/>} />
     
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
