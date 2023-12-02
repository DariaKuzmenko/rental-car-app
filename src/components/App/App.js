// import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";

// const Home = lazy(() => import("../../pages/Home/Home"));
// const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
// const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
