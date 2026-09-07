import { useEffect, useState } from "react";
import type { Product } from "../types/product";


export function useFetch(url: string){
    const [Products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => setError(err));
    }, [url]);

    return {
        Products,
        error
    }
}