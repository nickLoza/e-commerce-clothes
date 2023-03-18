import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface ICartObject{
	id: number
	url: string
	title: string
	season: string
	price: number
	quantity: number
}

interface ICounterState {
	cartItems: Array<ICartObject>
	totalQuantity: number
	totalPrice: number
}


const initialState: ICounterState = {
	cartItems: [],
	totalQuantity: 0,
	totalPrice: 0
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers:{
		addToCart(state,action){
			let find = state.cartItems.findIndex((item)=>item.id === action.payload.id)
			if(find === -1){
				state.cartItems.push({...action.payload,quantity: 1})
				state.totalPrice += action.payload.price;
				state.totalQuantity += 1;
			}
		},
		removeFromCart(state,action){
			state.cartItems.map((item)=>{
				if(item.id === action.payload){
					state.totalPrice -= item.price * item.quantity;
					state.totalQuantity -= item.quantity;
				}
			})
			state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload)
		},
		increaseItemQuantity(state, action){
			state.cartItems = state.cartItems.map((item)=>{
				if(item.id === action.payload){
					state.totalPrice += item.price;
					state.totalQuantity += 1;
					return {...item, quantity: item.quantity + 1}
				}
				return item
			})
		},
		decreaseItemQuantity(state,action){
			state.cartItems = state.cartItems.map((item)=>{
				if(item.id === action.payload){
					if(item.quantity > 1){
						state.totalPrice -= item.price;
						state.totalQuantity -= 1;
						return {...item, quantity: item.quantity - 1}
					}
				}
				return item;
			})
		}
	}
})

export const { 
	addToCart, 
	removeFromCart, 
	increaseItemQuantity, 
	decreaseItemQuantity } = cartSlice.actions;

	export const allItems = (state: RootState) => console.log(state)

	export default cartSlice.reducer;