import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
