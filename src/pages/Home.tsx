import { BiShoppingBag }from "react-icons/bi";
import { productsArray, productsDB } from "../products/products";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../app/hooks";
import Helmet from "../components/helmet";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';

const heroImages = ["https://i.postimg.cc/pdF0fvjk/hero-1.webp","https://i.postimg.cc/DZQBNcBX/hero-2.webp","https://i.postimg.cc/85gZwYBG/hero-3.webp"];

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

function Home() {
	const cartDispatch = useAppDispatch();

	function handleAddToCart(product: Object){
		cartDispatch(addToCart(product))
		
	}

	return (
		<Helmet title="home">
			<div className='home'>
			<section className="home__hero">
				<Swiper 
 				modules={[Navigation, Pagination]}
				spaceBetween={0} navigation pagination={{ clickable: true }} slidesPerView={1} className="home__hero-swiper">
				  {heroImages.map((url,i)=>{
				  	return <SwiperSlide key={i} className="home__hero-slide">
				  				<img src={url} alt="model image" className="home__hero-img"/>
				  			</SwiperSlide>
				  })}
				</Swiper>
			</section>
			<section className="home__banners">
				{productsArray.map((url, i)=>{
					return <img key={i} src={url} alt="model image" className="home__banners-img"/>
				})}
			</section>
			<section className="home__featured">
				<h3 className="home__featured-title">Featured</h3>
				<Swiper spaceBetween={25} slidesPerView={"auto"}className="home__featured-swiper">
				  {productsDB.map((prod)=>{
				  	return <SwiperSlide key={prod.id} className="home__featured-slide">
				  				<div className="home__featured-card card">
				  					<Link className="card__link" to={`/products/${prod.id}`}>
				  						<img src={prod.url} alt={prod.title} className="card__img"/>
				  					</Link>
				  				<p className="card__title">{prod.title}</p>
				  				<p className="card__price">{prod.price}</p>
				  				<button className="card__btn" onClick={()=>handleAddToCart(prod)}>
				  					<BiShoppingBag/>
				  				</button>
				  				</div>
				  			</SwiperSlide>
				  })}
				</Swiper>
			</section>
		</div>
		</Helmet>
	)
}

export default Home