import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export { Router };