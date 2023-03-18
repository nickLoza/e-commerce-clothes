import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { removeFromCart,increaseItemQuantity,decreaseItemQuantity } from "../../features/cart/cartSlice";

function Bag() {

	const dispatch = useAppDispatch();

	const cart = useAppSelector(state=>state.cartData);

	function handleRemoveToCart(id: number){
		dispatch(removeFromCart(id))
	}

	function increaseQty(id: number){
		dispatch(increaseItemQuantity(id))
	}
	function decreaseQty(id: number){
		dispatch(decreaseItemQuantity(id))
	}

	return (
		<div className="bag">
			<h4 className="bag__total">Total: ${cart.totalPrice}</h4>
			{cart.cartItems.map((prod)=>(
				<div key={prod.id} className="bag__product">
					<Link to={`products/${prod.id}`}>
						<img src={prod.url} alt={prod.title} className="bag__product-img"/>
					</Link>
					<div className="bag__product-text">
						<p className="bag__product-title">{prod.title}</p>
						<p className="bag__product-price">${prod.price} USD</p>
						<div className="bag__product-buttons">
							<button className="bag__product-btn" onClick={()=>decreaseQty(prod.id)}>-</button>
							<p className="bag__product-quantity">{prod.quantity}</p>
							<button className="bag__product-btn" onClick={()=>increaseQty(prod.id)}>+</button>
						</div>
						<button className="bag__product-remove" onClick={()=>handleRemoveToCart(prod.id)}>Remove</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Bag