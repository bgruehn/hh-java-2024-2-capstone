import { useState } from 'react';
import axios from 'axios';

const EditProductForm: React.FC = () => {
    const [productName, setProductName] = useState('');
    const [newName, setNewName] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newPrice, setNewPrice] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'productName') {
            setProductName(value);
        } else if (name === 'newName') {
            setNewName(value);
        } else if (name === 'newCategory') {
            setNewCategory(value);
        } else if (name === 'newPrice') {
            setNewPrice(parseFloat(value));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/products/${productName}`, { name: newName, category: newCategory, price: newPrice });
            alert(`Produkt ${response.data.name} erfolgreich geändert`);
            setProductName('');
            setNewName('');
            setNewCategory('');
            setNewPrice(0);
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Ändern des Produkts fehlgeschlagen');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={"head-add"}>
                <h3>Produkt bearbeiten</h3>
            </div>
            <div className={"font-form"}>
                <label>
                    Aktueller Name:
                    <input type="text" name="productName" value={productName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Neuer Name:
                    <input type="text" name="newName" value={newName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Neue Kategorie:
                    <input type="text" name="newCategory" value={newCategory} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Neuer Preis:
                    <input type="number" name="newPrice" value={newPrice} onChange={handleChange} />
                </label>
            </div>
            <br />
            <button type="submit">Produkt aktualisieren</button>
        </form>
    );
};

export default EditProductForm;