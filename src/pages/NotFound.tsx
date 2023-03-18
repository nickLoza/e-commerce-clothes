import { Link } from "react-router-dom"

function NotFound() {
	return (
		<div className="page-404">
			<p className="page-404__p">ERROR 404! Page not found</p>
			<Link className="page-404__link" to={"/"}>Click here</Link>
			<p className="page-404__p">to return to home page</p>
		</div>
	)
}

export default NotFound