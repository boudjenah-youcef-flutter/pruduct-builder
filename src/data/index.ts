import { InputForm, Iprodect } from "../intrfaces";
import {v4 as uuid} from "uuid";

export const productlist : Iprodect[] = [
    {
        "id": uuid(),
        "title": "Smartphone X",
        "descreption": "A high-end smartphone with a stunning display and great camera.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "699.99",
        "color": ["Black", "White", "Blue"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Electronics"
        }
    },
    {
        "id": uuid(),
        "title": "Leather Wallet",
        "descreption": "A genuine leather wallet with multiple compartments for cards and cash.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "49.99",
        "color": ["Brown", "Black"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Accessories"
        }
    },
    {
        "id": uuid(),
        "title": "Running Shoes",
        "descreption": "Comfortable and durable running shoes for all terrains.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "89.99",
        "color": ["Red", "Blue", "Green"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Footwear"
        }
    },    {
        "id": uuid(),
        "title": "Leather Wallet",
        "descreption": "A genuine leather wallet with multiple compartments for cards and cash.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "49.99",
        "color": ["Brown", "Black"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Accessories"
        }
    },
    {
        "id": uuid(),
        "title": "Leather Wallet",
        "descreption": "A genuine leather wallet with multiple compartments for cards and cash.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "49.99",
        "color": ["Brown", "Black"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Accessories"
        }
    },
    {
        "id": uuid(),
        "title": "Leather Wallet",
        "descreption": "A genuine leather wallet with multiple compartments for cards and cash.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "49.99",
        "color": ["Brown", "Black"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Accessories"
        }
    },
    {
        "id": uuid(),
        "title": "Leather Wallet",
        "descreption": "A genuine leather wallet with multiple compartments for cards and cash.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "49.99",
        "color": ["Brown", "Black"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Accessories"
        }
    },
    {
        "id": uuid(),
        "title": "Leather Wallet",
        "descreption": "A genuine leather wallet with multiple compartments for cards and cash.",
        "imagUrl": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
        "price": "49.99",
        "color": ["Brown", "Black"],
        "catigury": {
            "imag": "https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ",
            "name": "Accessories"
        }
    },
]

export const formlabel : InputForm[] = [
    {
        id : "1" ,
        name : "title",
        label : "Product title",
        type : "text"
    },
    {
        id : "2" ,
        name : "title",
        label : "Product description",
        type : "text"
    },
    {
        id : "3" ,
        name : "title",
        label : "Product Image URL",
        type : "text"
    },
    {
        id : "4" ,
        name : "title",
        label : "Product Price",
        type : "text"
    }
]