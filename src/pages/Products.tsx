import React, { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore} from "react-icons/md";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";
import { productsDB } from "../products/products";
import { BiShoppingBag }from "react-icons/bi";
import { Link } from "react-router-dom";
import Helmet from "../components/helmet";


type SeasonsType = "all"|"summer"|"spring"|"autumn"|"winter";
type SelectedType = "all"|"head"|"torso"|"legs"|"feet";

interface ProductsProps{
	filterProp: SeasonsType
}

interface ProductsTypes{
	id: number
	url: string
	title: string
	season: string
	price: number
	type: string

}

function Products({ filterProp }: ProductsProps) {

	const [ selectedType, setSelectedType ] = useState<SelectedType>("all")
	const [ products, setProducts ] = useState<Array<ProductsTypes>>([])
	const [ page, setPage ] = useState<number>(1);

	function getProducts(keyWord: SeasonsType){

		function innerFilter(){
			switch(keyWord){
		case "all":
			return productsDB;
		case "summer":
			return productsDB.filter(prod=>prod.season === "summer");
		case "winter":
			return productsDB.filter(prod=>prod.season === "winter");
		case "spring":
			return productsDB.filter(prod=>prod.season === "spring");
		case "autumn":
			return productsDB.filter(prod=>prod.season === "autumn");
		}
		}

		setProducts(innerFilter())
	}

	useEffect(()=>{
		setPage(1)
		getProducts(filterProp)
		if(selectedType !== "all"){
			setProducts(products=>products.filter(prod=>prod.type === selectedType))
		}
	},[filterProp, selectedType])


	const cartDispatch = useAppDispatch();

	function handleAddToCart(product: Object){
		cartDispatch(addToCart(product))
		
	}


	function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>){
		setSelectedType(e.target.value as SelectedType)
	}

	function selectPage(pageNum: number){
		if(pageNum >= 1 && pageNum <= Math.ceil(products.length/10) && pageNum!==page){
			setPage(pageNum)
		}
	}


	return (
		<Helmet title="products">
			<div className='products'>
			<h2 className="products__title">{filterProp.toUpperCase()} COLLECTION 2023</h2>
			<div className="products__filters">
				<h4 className="products__filters-title">Clothes for: </h4>
				<select name="type" className="products__filters-select" onChange={handleOnChange} value={selectedType}>
					<option className="product__filters-option"  value="all">All</option>
					<option className="product__filters-option"  value="head">Head</option>
					<option className="product__filters-option"  value="torso">Torso</option>
					<option className="product__filters-option"  value="legs">Legs</option>
					<option className="product__filters-option" value="feet">Feet</option>
				</select>
			</div>
			<div className="products__list">
				{filterProp && (products.slice(page * 10 - 10, page * 10)).map((prod)=>(
					<div key={prod.id} className="products__product">
						<Link className="products__product-link" to={`/products/${prod.id}`} aria-label={`click to open ${prod.title} page`}>
							<img src={prod.url} alt={prod.title} className="products__product-img"/>
						</Link>
						<p className="products__product-title">{prod.title}</p>
						<p className="products__product-season">{prod.season}</p>
						<p className="products__product-price">${prod.price}</p>
						<button className="products__product-cart" onClick={()=>handleAddToCart(prod)} aria-label={`add ${prod.title} to bag`}>
							<BiShoppingBag/>
						</button>
					</div>
				))}
			</div>
			{products.length > 0 &&
			<div className="products__pagination">
				<MdNavigateBefore onClick={()=>selectPage(page - 1)} className="products__pagination-icon"/>
				
					{[...Array(Math.ceil(products.length/10))].map((_, i) => {
          			return <span key={i} className={page === i + 1 ? "products__pagination-selected" : ""} onClick={() => selectPage(i + 1)}>{i + 1}</span>

        			})}		

				<MdNavigateNext onClick={()=>selectPage(page + 1)} className="products__pagination-icon"/>
			</div>}
		</div>
		</Helmet>
	)
}

export default Products