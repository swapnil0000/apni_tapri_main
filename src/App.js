import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Screen/Home/Home";
import About from "./Screen/About/About";
import Menu from "./Screen/Menu/Menu";
import Meal from "./Screen/Meal/Meal";
import Location from "./Screen/Location/Location";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header/index"
import Footer from "./Components/Footer/Footer";
import Delivery from "./Screen/Delivery/Delivery";
import Dining from "./Screen/Dining/Dining";
import Pickup from "./Screen/Pickup/Pickup";
function App() {

  return (
   <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/meal" element={<Meal/>}/>
      <Route path={"/location" } element={<Location/>}/>
      <Route path={"/delivery"} element={<Delivery/>}/>
      <Route path={"/dining"} element={<Dining/>}/>
      <Route path={"/pickup"} element={<Pickup/>}/>
     </Routes>
     <Drawer/>
     <Footer/>
   </BrowserRouter>
  );
}

export default App;
