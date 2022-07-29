import './style.css'
 
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/editproduct'
import signin from './pages/auth/signin'
import signup from './pages/auth/signup'
 

const router = new Navigo('/', {linksSelector: "a"})

type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render(params)
  if(component.afterRender) {
    component.afterRender()
  }
}

router.on({
  "/": () => {
    print(HomePage)
  },
  "/signup": () => {
    print(signup)
  },
  "/signin": () => {
    print(signin)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/edit/:id": (params) => {
    print(EditProductPage, params)
  },
})


router.resolve()