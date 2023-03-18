import { useState } from "react";
import { AiOutlineHome, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { BiShoppingBag }from "react-icons/Bi";
import { Link, Navigate } from "react-router-dom";
import Bag from "../utils/Bag";
import Menu from "./Menu";
import Search from "../utils/Search";

type ClickedIconTypes = "menu"|"search"|"user"|"bag"|"";

function Tabvar() {

	const [ clickedIcon, setClickedIcon ] = useState<ClickedIconTypes>("")

	


	function renderClicked(){
		switch(clickedIcon){
		case "menu":
			return <Menu closeTabvar={closeTabvar}/>
		case "search":
			return <Search/>
		case "bag":
			return <Bag/>
		default:
			break
		}
	}

	function closeTabvar(){
		setClickedIcon("")
	}

	return (
		<div className="tabvar" role="navigation">
			<div className={clickedIcon!=""? "tabvar__content active": "tabvar__content"} aria-label={`${clickedIcon} content`}>
				{renderClicked()}
				<button className="tabvar__content-close" onClick={()=>setClickedIcon("")} aria-label={`click to close ${clickedIcon} content`}>
					<AiOutlineClose/>
				</button>
			</div>
			<ul className="tabvar__ul">
				<li className="tabvar__ul-li">
					<Link onClick={()=>closeTabvar()} to={"home"} aria-label="click to go to home page">
						<AiOutlineHome/>
					</Link>
				</li>
				<li className="tabvar__ul-li">
					<AiOutlineMenu className="tabvar__ul-icon" onClick={()=>setClickedIcon("menu")} aria-label="click to open menu"/>
				</li>
				<li className="tabvar__ul-li">
					<AiOutlineSearch className="tabvar__ul-icon" onClick={()=>setClickedIcon("search")} aria-label="click to open products search bar"/>
				</li>
				<li className="tabvar__ul-li">
					<BiShoppingBag className="tabvar__ul-icon" onClick={()=>setClickedIcon("bag")} aria-label="click to open your bag"/>
				</li>
			</ul>
			
		</div>
	)
}

export default Tabvar