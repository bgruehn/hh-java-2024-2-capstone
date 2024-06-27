import { useState, useEffect } from 'react';
import axios from 'axios';
import {Product} from "./Product.tsx";

function GetAllProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("/api/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Fehler beim Abrufen der Produkte:", error);
            });
    }, []);

    if (products.length === 0) {
        return <div>Keine Produkte gefunden</div>;
    }

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default GetAllProducts;