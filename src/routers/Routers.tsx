import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"))
const Products = lazy(() => import("../pages/Products"))
const ProductDetails = lazy(() => import("../pages/ProductDetails"))
const NotFound = lazy(() => import("../pages/NotFound"))
import ClipLoader from "react-spinners/ClipLoader";

import {
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function Routers() {
	return (
		<Suspense fallback={
				<ClipLoader
						color="#D6C1A0"
						cssOverride={
							{display: "block",
  						margin: "0 auto"}}
						size={125}/> 
					}>
			<Routes>
				<Route path="/" 				   		element={<Navigate to ="home"/>}/>
				<Route path="home" 				 		element={<Home/>}/>
				<Route path="products/all" 		element={<Products filterProp={"all"}/>}/>
				<Route path="products/spring" element={<Products filterProp={"spring"}/>}/>
				<Route path="products/summer" element={<Products filterProp={"summer"}/>}/>
				<Route path="products/autumn" element={<Products filterProp={"autumn"}/>}/>
				<Route path="products/winter" element={<Products filterProp={"winter"}/>}/>
				<Route path="products/:id"    element={<ProductDetails/>}/>
				<Route path="*" 							element={<NotFound/>}/>
			</Routes>
		</Suspense>
	)
}

export default Routers