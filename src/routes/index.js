import ProductList from "../views/main/ProductList";

const routes = [
  {
    path: "/",
    exact: true,
    component: ProductList,
    routes: null,
  },
  // {
  //   path: "/home",
  //   exact: true,
  //   component: ProductList,
  //   routes: [
  //     {
  //       path: "/home/page1",
  //       exact: true,
  //       component: ProductList,
  //     },
  //     {
  //       path: "/home/page2",
  //       exact: true,
  //       component: ProductList,
  //     },
  //   ],
  // },
];

export default routes;
