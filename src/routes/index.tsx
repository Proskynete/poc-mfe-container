import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  const data = {
    username: "Lalo",
  };

  return (
    <Routes>
      {routes.map((route) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const View = route.component;

        return (
          <Route
            key={route.name}
            path={route.path}
            element={
              <Guard>
                <Layout>
                  <Suspense fallback="Cargando...">
                    <View data={data} />
                  </Suspense>
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  );
};

export { Router };
