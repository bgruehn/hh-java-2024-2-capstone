import { useState } from 'react';

type Category = {
    id: number;
    name: string;
};

const AddCategoryForm: React.FC = () => {
    const [category, setCategory] = useState<Category>({ id: Math.floor(Math.random() * 1000), name: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Category:', category);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={"head-add"}>
                <h3>Kategorie hinzufügen</h3>
            </div>
            <input type="hidden" name="id" value={category.id}/>
            <div className={"font-form"}>
                <label>
                    Name:
                    <input type="text" name="name" value={category.name} onChange={handleChange}/>
                </label>
            </div>
                <br/>
                <button type="submit">Kategorie hinzufügen</button>
        </form>
);
};

export default AddCategoryForm;