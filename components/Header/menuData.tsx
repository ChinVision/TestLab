import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Publications",
    newTab: false,
    path: "/publications",
  },
  {
    id: 3,
    title: "People",
    newTab: false,
    path: "/teams",
  },
  // {
  //   id: 3,
  //   title: "People",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Principal Investigator",
  //       newTab: false,
  //       path: "/pi",
  //     },
  //     {
  //       id: 32,
  //       title: "Postdoctoral Scholars",
  //       newTab: false,
  //       path: "/ps",
  //     },
  //     {
  //       id: 33,
  //       title: "Graduate Students",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 34,
  //       title: "Alumni",
  //       newTab: false,
  //       path: "/docs",
  //     }
  //   ],
  // },
  {
    id: 4,
    title: "Gallery",
    newTab: false,
    path: "/gallery",
  },
  // {
  //   id: 5,
  //   title: "Data Overview",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "data1",
  //       newTab: false,
  //       path: "/",
  //     },
  //     {
  //       id: 51,
  //       title: "data2",
  //       newTab: false,
  //       path: "/",
  //     },
  //   ],
  // },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
