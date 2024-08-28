import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Food from './pages/Food/Food';
import Category from './pages/Category/Category';
import CategoryDetail from './pages/CategoryDetail/CategoryDetail';
import My from './pages/My/My';
import Footer from './components/common/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/:id" element={<Food />} />
        <Route path="/category" element={<Category />} />
        <Route path="/categoryDetail" element={<CategoryDetail />} />
        <Route path="/my" element={<My />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
