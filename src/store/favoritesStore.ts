import {type Product } from "../types/product";
import { create } from "zustand";

interface favoritesStoreType{
    products: Product[],
    add: (product: Product) => void,
    remove: (id: number) => void

}

export const favoritesStore = create<favoritesStoreType>((set)=>({
    products: [],
    add: (product: Product) => set((s)=> ({products: [...s.products, product]})),
    remove: (id: number) => set((s) => ({products: s.products.filter(val => val.id !== id)}))
}))