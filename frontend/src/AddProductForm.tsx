import {useState} from 'react';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Product:', product);
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