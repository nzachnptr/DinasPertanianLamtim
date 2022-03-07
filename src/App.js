import "./App.css";
import Header from "./Header";
import Main from "./components/Main/Main";
import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
// import Weather from "./Weather";
// import Footer from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import DetailNews from "./DetailNews";
import ArticleList from "./ArticleList";
import DetailArticle from "./DetailArticle";
import { PDFViewer } from "./PDFViewer";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Weather /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<Profile />} />
        <Route path="/article" element={<ArticleList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news/:slug" element={<DetailNews />} />
        <Route path="/article/:slug" element={<DetailArticle />} />
        <Route path="/pdf/:slug/:filename" element={<PDFViewer />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
