import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { productsDB } from "../../products/products";


interface resultArrayTypes{
	id: number
	url: string
	price: number
	title: string
}

function Search() {

	const [ search, setSearch ] = useState<string>("");
	const [ resultArray, setResultArray ] = useState<Array<resultArrayTypes>>([])

	useEffect(()=>{
		filterProducts()
	},[search])

	function filterProducts(){
		if(search!=""){
			let filteredProducts = productsDB.filter(prod=>prod.title.includes(search.toLowerCase()));
			setResultArray(filteredProducts)
		}else setResultArray([])
	}

	function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
		setSearch(e.target.value);
	}

	return (
		<div className="search m-top-a-center">
		<h3 className="search__title">Search clothing by name</h3>
			<input type="text" className="search__input" placeholder="Search product" value={search} onChange={handleOnChange}/>
			<div className="search__results">
				{resultArray.map((prod)=>(
					<Link key={prod.id}className="search__results-card card" to={`/products/${prod.id}`}>
						<img src={prod.url} alt={prod.title} className="card__img"/>
						<h3 className="card__title">{prod.title}</h3>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Search