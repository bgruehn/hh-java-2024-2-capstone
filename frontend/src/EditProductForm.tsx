import { useState } from 'react';
import axios from "axios";

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
};

const EditProductForm: React.FC<{ product: Product, onUpdateProduct: (updatedProduct: Product) => void }> = ({ product, onUpdateProduct }) => {
    const [editedProduct, setEditedProduct] = useState<Product>(product);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateProduct(editedProduct); // Lokale Aktualisierung
        axios.put(`/api/products/${editedProduct.id}`, editedProduct)
            .then(response => {
                console.log('Produkt erfolgreich aktualisiert:', response.data);
            })
            .catch(error => {
                console.error('Fehler beim Aktualisieren des Produkts:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Kategorie:
                <input type="text" name="category" value={editedProduct.category} onChange={handleChange} />
            </label>
            <br />
            <label>
                Preis:
                <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Produkt aktualisieren</button>
        </form>
    );
};

export default EditProductForm;