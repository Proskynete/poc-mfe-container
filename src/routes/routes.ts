import {
  ComponentType,
  FunctionComponent,
  lazy,
  LazyExoticComponent,
} from "react";
import { AdminLayout } from "../layout/Admin";

interface RouteInterface {
  name: string;
  path: string;
  layout?: FunctionComponent<{}>;
  component: LazyExoticComponent<ComponentType<any>>;
  routes?: RouteInterface[];
}

const routes: RouteInterface[] = [
  {
    name: "Home",
    path: "/",
    layout: AdminLayout,
    component: lazy(() => import("../views/Home")),
  },
  {
    name: "Drivers",
    path: "/drivers",
    layout: AdminLayout,
    //@ts-ignore
    component: lazy(() => import("drivers/CounterAppOne")),
  },
  {
    name: "Growth",
    path: "/growth",
    layout: AdminLayout,
    //@ts-ignore
    component: lazy(() => import("growth/CounterAppTwo")),
  },
];

export { routes };
