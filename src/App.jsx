import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PracticePage from "./pages/PracticePage";
import styles from "./styles";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";
import PracticeLogin from "./pages/PracticeLogin";
import InfinitePages from "./pages/InfinitePages";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>

      <div style={{ backgroundColor: '#8E7099' }} className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/practicelogin" element={<PracticeLogin />} />
          <Route path="/practice/forms" element={<FormPage />} />
          <Route path="/practice/tables" element={<TablePage />} />
          <Route path="/practice/grid" element={<InfinitePages />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;