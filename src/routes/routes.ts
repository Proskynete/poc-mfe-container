import {
  ComponentType,
  FunctionComponent,
  lazy,
  LazyExoticComponent,
} from "react";
import { AdminLayout } from "../layout/Admin";
import { Guard } from "./Guard";
import { RolesAllowed } from "./navigation";

interface RouteInterface {
  name: string;
  path: string;
  guard: any;
  layout?: FunctionComponent<{}>;
  component: LazyExoticComponent<ComponentType<any>>;
  routes?: RouteInterface[];
  rolesAllowed: RolesAllowed[];
}

const routes: RouteInterface[] = [
  {
    name: "auth",
    path: "/auth",
    guard: Guard,
    rolesAllowed: ["superadmin", "kam", "driver", "growth"],
    //@ts-ignore
    component: lazy(() => import("auth/")),
  },
  {
    name: "Home",
    path: "/",
    guard: Guard,
    layout: AdminLayout,
    rolesAllowed: ["superadmin", "kam", "driver", "growth"],
    component: lazy(() => import("../views/Home")),
  },
  {
    name: "Drivers",
    path: "/drivers",
    guard: Guard,
    layout: AdminLayout,
    rolesAllowed: ["superadmin", "kam", "driver"],
    //@ts-ignore
    component: lazy(() => import("drivers/")),
  },
  {
    name: "Growth",
    path: "/growth",
    guard: Guard,
    layout: AdminLayout,
    rolesAllowed: ["superadmin", "kam", "growth"],
    //@ts-ignore
    component: lazy(() => import("growth/")),
  },
];

export { routes };
