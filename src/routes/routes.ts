import {
  ComponentType,
  FunctionComponent,
  lazy,
  LazyExoticComponent,
} from "react";
import { AdminLayout } from "../layout/Admin";
import { Guard } from "./Guard";

interface RouteInterface {
  name: string;
  path: string;
  guard: any;
  layout?: FunctionComponent<{}>;
  component: LazyExoticComponent<ComponentType<any>>;
  routes?: RouteInterface[];
}

const routes: RouteInterface[] = [
  {
    name: "auth",
    path: "/auth",
    guard: Guard,
    //@ts-ignore
    component: lazy(() => import("auth/")),
  },
  {
    name: "Home",
    path: "/",
    guard: Guard,
    layout: AdminLayout,
    component: lazy(() => import("../views/Home")),
  },
  {
    name: "Drivers",
    path: "/drivers",
    guard: Guard,
    layout: AdminLayout,
    //@ts-ignore
    component: lazy(() => import("drivers/")),
  },
  {
    name: "Growth",
    path: "/growth",
    guard: Guard,
    layout: AdminLayout,
    //@ts-ignore
    component: lazy(() => import("growth/")),
  },
];

export { routes };
