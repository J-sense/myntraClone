import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Header2 from "./components/Header2";

function App() {
  return (
    <>
      <Header />
      {/* <Header2 /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
