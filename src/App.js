import "./App.css";
import Header from "./Header";
import Main from "./components/Main/Main";
import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import Footer from "./components/Footer/Footer";
import News from "./News";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<Profile />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
