import { NavLink } from "react-router-dom"

const seasons = [
	{title: "ALL COLLECTION", to: "products/all"},
	{title: "Spring", to: "products/spring"},
	{title: "Summer", to: "products/summer"},
	{title: "Autumn", to: "products/autumn"},
	{title: "Winter", to: "products/winter"}
]

interface MenuProps{
	closeTabvar: Function
}

function Menu({ closeTabvar }: MenuProps) {
	return (
		<div className="tabvar__content-menu menu m-top-a-center" role="menu">
			<h2 className="menu__title">Clothing for every season</h2>
			<ul className="menu__ul">
				{seasons.map((item,i)=>(
					<li key={i} className="menu__li">
						<NavLink  
							className={({isActive})=> isActive? "menu__link active": "menu__link"} 
							onClick={()=>closeTabvar()} to={item.to}
							aria-label={`click to open ${item.title} page`}>
							{item.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Menu