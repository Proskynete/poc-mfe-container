import { ComponentType, lazy, LazyExoticComponent } from "react";

interface Routes {
  name: string;
  path: string;
  component: LazyExoticComponent<ComponentType<any>>;
}

const routes: Routes[] = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../views/Home")),
  },
  {
    name: "Drivers",
    path: "/drivers",
    //@ts-ignore
    component: lazy(() => import("drivers/CounterAppOne")),
  },
  {
    name: "Growth",
    path: "/growth",
    //@ts-ignore
    component: lazy(() => import("growth/CounterAppTwo")),
  },
];

export { routes };
