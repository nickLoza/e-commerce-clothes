import { useParams } from "react-router-dom"
import { productsDB } from "../products/products"

import Helmet from "../components/helmet";
import { useAppDispatch } from "../app/hooks"
import { addToCart } from "../features/cart/cartSlice"
import NotFound from "./NotFound"

function ProductDetails() {



	const { id } = useParams()
	const product  = productsDB.find(item=>item.id===Number(id))

	const cartDispatch = useAppDispatch();

	function handleAddToCart(product: Object){
		cartDispatch(addToCart(product))
	}

	return (
		<Helmet title={`${product?.title}`}>
            <div className="product-details">
            {product ? 
            <><div className="product-details__images">
                    <img className="product-details__images-img" src={product?.url} alt={product?.title} />
                </div><div className="product-details__text">
                        <h4 className="product-details__text-title" tabIndex={0}>{product?.title}</h4>
                        <p className="product-details__text-price" tabIndex={0}>${product?.price}</p>
                        <p className="product-details__text-type" tabIndex={0}>COLOR <span>Black</span></p>
                        <p className="product-details__text-type" tabIndex={0}>SIZE <span>small</span></p>
                        <button className="product-details__text-btn" onClick={() => handleAddToCart(product)} aria-label="click to add to cart">
                            ADD TO CART
                        </button>
                        <div className="product-details__text-description">
                            <p tabIndex={0}>Croco eco-leather short skirt. V-shaped front. Invisible zipper on the side.</p>

                            <p tabIndex={0}><b>Composition:</b> 60% PU, 40% polyester.</p>

                            <p tabIndex={0}><b>Care:</b> sectorized cleaning with a damp cloth. Do not iron. Do not use washing machines. Do not twist. Do not spin.</p>
                        </div>
                    </div></>:<NotFound/>}
        </div>
        </Helmet>	)
}

export default ProductDetails