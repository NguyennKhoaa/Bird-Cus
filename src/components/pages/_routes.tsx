import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import HomeCustome from "../Carousel/HomeCustome";
import ProductNewForm from "../CreateTK/ProductNewForm";
import Dashboard from "../Dashboard/Dashboard";
import About from "../Detail/About";
import KetQua from "../KetQua/KetQua";
import TableUser from "../Table/TableUser";

const Router = (): JSX.Element => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Dashboard />}></Route>
      <Route path="/danhsachnguoidung" element={<TableUser />}></Route>
      <Route path="/taotaikhoan" element={<ProductNewForm />} /> */}
      <Route path="/" element={<HomeCustome />}></Route>
      <Route path="/result" element={<KetQua />}></Route>
      <Route path="/result/about" element={<About />}></Route>
      {/* <Route path="/taotaikhoan" element={<ProductNewForm />} /> */}
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
