import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
type CartItem={id:number;name:string;price:number;image:string;weight:string;qty:number};
const cartSlice=createSlice({name:"cart",initialState:{items:[] as CartItem[],coupon:""},reducers:{add:(s,a:PayloadAction<CartItem>)=>{const found=s.items.find(i=>i.id===a.payload.id&&i.weight===a.payload.weight);found?found.qty+=a.payload.qty:s.items.push(a.payload)},qty:(s,a:PayloadAction<{id:number;weight:string;qty:number}>)=>{const item=s.items.find(i=>i.id===a.payload.id&&i.weight===a.payload.weight);if(item)item.qty=Math.max(1,a.payload.qty)},remove:(s,a:PayloadAction<{id:number;weight:string}>)=>{s.items=s.items.filter(i=>i.id!==a.payload.id||i.weight!==a.payload.weight)},coupon:(s,a:PayloadAction<string>)=>{s.coupon=a.payload}}});
const wishlistSlice=createSlice({name:"wishlist",initialState:{ids:[] as number[]},reducers:{toggle:(s,a:PayloadAction<number>)=>{s.ids=s.ids.includes(a.payload)?s.ids.filter(id=>id!==a.payload):[...s.ids,a.payload]}}});
export const {add,qty,remove,coupon}=cartSlice.actions;export const {toggle}=wishlistSlice.actions;
export const store=configureStore({reducer:{cart:cartSlice.reducer,wishlist:wishlistSlice.reducer}});
export type RootState=ReturnType<typeof store.getState>;export type AppDispatch=typeof store.dispatch;
