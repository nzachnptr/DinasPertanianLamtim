import "./App.css";
import Header from "./Header";
import Main from "./components/Main/Main";
import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Footer from "./components/Footer/Footer";
import News from "./News";
import Gallery from "./Gallery";
// import ContactUs from "./ContactUs";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/contactus" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
