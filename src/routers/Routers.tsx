import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

import {
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function Routers() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to ="home"/>}/>
			<Route path="home" element={<Home/>}/>
			<Route path="products/all" element={<Products filterProp={"all"}/>}/>
			<Route path="products/spring" element={<Products filterProp={"spring"}/>}/>
			<Route path="products/summer" element={<Products filterProp={"summer"}/>}/>
			<Route path="products/autumn" element={<Products filterProp={"autumn"}/>}/>
			<Route path="products/winter" element={<Products filterProp={"winter"}/>}/>
			<Route path="products/:id" element={<ProductDetails/>}/>
			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}

export default Routers