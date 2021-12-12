import { House, GeoAlt, Globe } from "react-bootstrap-icons";

export type RolesAllowed = "superadmin" | "kam" | "driver" | "growth";

interface Items {
  show: boolean;
  title: string;
  to: string;
  icon: any;
  rolesAllowed: RolesAllowed[];
}

interface Navigation {
  section: string;
  items: Items[];
}

const navigation: Navigation[] = [
  {
    section: "Dashboard",
    items: [
      {
        show: true,
        title: "Inicio",
        to: "/",
        icon: <House />,
        rolesAllowed: ["superadmin", "kam", "driver", "growth"],
      },
    ],
  },
  {
    section: "Módulos",
    items: [
      {
        show: true,
        title: "Drivers",
        to: "/drivers",
        icon: <GeoAlt />,
        rolesAllowed: ["superadmin", "kam", "driver"],
      },
      {
        show: true,
        title: "Growth",
        to: "/growth",
        icon: <Globe />,
        rolesAllowed: ["superadmin", "kam", "growth"],
      },
      {
        show: false,
        title: "Other",
        to: "/other",
        icon: <GeoAlt />,
        rolesAllowed: ["superadmin", "growth", "driver"],
      },
    ],
  },
];

export { navigation };
