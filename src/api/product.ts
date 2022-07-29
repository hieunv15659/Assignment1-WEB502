
import Product from "../model/product";
 
import instance from "./instance";

export const createProduct = (product: Product) => {
    const url = "/products"
    return instance.post(url, product)
}
export const product = (id: number) => {
    return instance.get(`/product/${id}`)
}

export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}
 
export const get = (id: number) => {
    const url = "/products/" + id
    return instance.get(url)
}
 
 
export const update = (product: Product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
}