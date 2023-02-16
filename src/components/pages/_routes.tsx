import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import ProductNewForm from "../CreateTK/ProductNewForm";
import Dashboard from "../Dashboard/Dashboard";
import TableUser from "../Table/TableUser";

const Router = (): JSX.Element => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/danhsachnguoidung" element={<TableUser />}></Route>
      <Route path="/taotaikhoan" element={<ProductNewForm />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
