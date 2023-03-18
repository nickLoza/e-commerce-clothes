import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag }from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import Bag from "../utils/Bag";
import Search from "../utils/Search";


const seasons = [
	{title: "ALL COLLECTION", to: "products/all"},
	{title: "Spring", to: "products/spring"},
	{title: "Summer", to: "products/summer"},
	{title: "Autumn", to: "products/autumn"},
	{title: "Winter", to: "products/winter"}
]

const logoUrl = "/assets/images/logo.png"

type ToggleSideTypes = "bag"|"search"|null;

function Header() {


	const [ toggleSide, setToggleSide ] = useState<ToggleSideTypes>(null) 


	function handleOpenSides(sideName : ToggleSideTypes){
		setToggleSide(sideName)
	}

	function handleCloseSides(){
		setToggleSide(null)
	}

	return (
		<>
		<header className="header" role="banner">
			<div className="header__navbar">
				<button className="header__navbar-btn hide-on-mobile" onClick={()=>handleOpenSides("search")}>
					<AiOutlineSearch/>
				</button>
				<div className="header__navbar-center" role="navigation">
					<Link to={"home"} aria-label="click logo to go to home page">
						<img src={logoUrl} alt="logo" className="header__navbar-logo"/>
					</Link>
					<ul className="header__navbar-menu menu hide-on-mobile">
						<li className="menu__li">
							<NavLink to={"home"} className={({isActive})=> isActive? "menu__link active": "menu__link"} aria-label="click to go to home page">
								Home
							</NavLink>
						</li>
						{seasons.map((item,i)=>(
							<li key={i} className="menu__li">
								<NavLink to={item.to} className={({isActive})=> isActive? "menu__link active": "menu__link"} aria-label={`click to go to ${item.title} clothes`}>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<button className="header__navbar-btn hide-on-mobile right" onClick={()=>handleOpenSides("bag")} aria-label="click to open your bag">
					<BiShoppingBag/>
				</button>
			</div>
			<aside className={toggleSide==="bag"? "aside side-right active":"aside side-right"} role="complementary">
			<button className="aside__btn side-right__btn" onClick={()=>handleCloseSides()} aria-label={`click to close ${toggleSide} section`}>
				<AiOutlineClose/>
			</button>
			<Bag/>
		</aside>
		<aside className={toggleSide==="search"? "aside side-left active":"aside side-left"} role="complementary">
			<button className="aside__btn" onClick={()=>handleCloseSides()} aria-label="click to open the products search bar">
				<AiOutlineClose/>
			</button>
			<Search/>
		</aside>
		</header>
		
		</>
	)
}

export default Header