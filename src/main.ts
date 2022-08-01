import "./style.css";

import Navigo from "navigo";
import AdminPage from "./pages/Admin";
import HomePage from "./pages/Home";
import AddProductPage from "./pages/Admin/Product/add";
import EditProductPage from "./pages/Admin/Product/editproduct";
import signin from "./pages/auth/signin";
import signup from "./pages/auth/signup";
import detailProduct from "./pages/Home/detail";

const router = new Navigo("/", { linksSelector: "a" });

type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void;
};

const print = async (component: ComponentBase, params?: any) => {
  document.getElementById("app").innerHTML = await component.render(params);
  if (component.afterRender) {
    component.afterRender();
  }
};

router.on({
  "/": () => {
    print(HomePage);
  },
  "/signup": () => {
    print(signup);
  },
  "/signin": () => {
    print(signin);
  },
  "/admin": () => {
    print(AdminPage);
  },
  "/admin/product/add": () => {
    print(AddProductPage);
  },
  "/admin/product/edit/:id": (params: any) => {
    const id = +params.data.id;
    console.log(id);
    print(EditProductPage, id);
  },
  "/product/:id": (params: any) => {
    print(detailProduct, params);
  },
});

router.resolve();
