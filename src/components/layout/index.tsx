import Header from "../header"
import Routers from "../../routers/Routers";
import Footer from "../footer";
import Tabvar from "../tabvar";
function Layout() {
	return (
			<>
				<Header />
				<Tabvar />
				<div className="main">
	            	<Routers />
	        	</div>
	        	<Footer />
        	</>
	)
}

export default Layout