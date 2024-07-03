import  {useState} from 'react';
import axios from 'axios';

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
}

const AddProductForm: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        id: Math.floor(Math.random() * 1000),
        name: '',
        category: '',
        price: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/products', product);
            alert(`Produt ${response.data.name} erfolgreich hinzugefügt`);
            setProduct({ id: Math.floor(Math.random() * 1000), name: '', price: 0.00, category:''});
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Produkt hinzufügen fehlgeschlagen');
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <div className={"head-add"}>
            <h3>Produkt hinzufügen</h3>
            </div>
            <div className={"font-form"}>
            <label>
                Name:
                <input type="text" name="name" value={product.name} onChange={handleChange} />
            </label>
            <br />
            <label>
                Kategorie:
                <input type="text" name="category" value={product.category} onChange={handleChange} />
            </label>
            <br />
            <label>
                Preis:
                <input type="number" name="price" value={product.price} onChange={handleChange} />
            </label>
            </div>
            <br />
            <button type="submit">Produkt hinzufügen</button>
        </form>
    );
};

export default AddProductForm;