import Basket from "../pages/Basket";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import ProductAdd from "../pages/ProductAdd";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import UserRoot from "../pages/UserRoot";

const ROUTES = [
    {
        path:"/",
        element: <UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/products/:id",
                element:<ProductDetail/>
            },
            {
                path:"/basket",
                element:<Basket/>
            },
            {
                path:"/ProductAdd",
                element:<ProductAdd/>
            },
            {
                path:"*",
                element:<NoPage/>
            }
        ]
    },
    
]

export default ROUTES