import type InterfaceProduct from "@/types/InterfaceProduct.ts";

class Product implements InterfaceProduct {
    _id:number
    title:string
    isNew:boolean
    oldPrice:string
    price:number
    description:string
    category:string
    image:string
    rating:number

    constructor(_id:number, title: string, isNew: boolean, oldPrice: string, price: number, description: string, category:string, image:string, rating:number) {
        this._id = _id;
        this.title = title;
        this.isNew = isNew;
        this.oldPrice = oldPrice;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
    }
}