import { House, GeoAlt, Globe } from "react-bootstrap-icons";

interface Navigation {
  section: string;
  items: Items[];
}

interface Items {
  show: boolean;
  title: string;
  to: string;
  icon: any;
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
      },
      {
        show: true,
        title: "Growth",
        to: "/growth",
        icon: <Globe />,
      },
      {
        show: false,
        title: "Other",
        to: "/other",
        icon: <GeoAlt />,
      },
    ],
  },
];

export { navigation };
