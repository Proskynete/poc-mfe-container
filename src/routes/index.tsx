import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import { routes } from "./routes";

const Router = () => {
  const currentRole = "growth";

  return (
    <Routes>
      {routes.map((route) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const View = route.component;
        const roles = route.rolesAllowed;

        return (
          <>
            {roles.find((roleAllowed) => roleAllowed === currentRole) && (
              <Route
                key={route.name}
                path={route.path}
                element={
                  <Guard>
                    <Layout>
                      <Suspense fallback="Cargando...">
                        <View />
                      </Suspense>
                    </Layout>
                  </Guard>
                }
              />
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        );
      })}
    </Routes>
  );
};

export { Router };
