import { useState } from 'react';
import axios from 'axios';

const EditCategoryForm: React.FC = () => {
    const [categoryName, setCategoryName] = useState('');
    const [newName, setNewName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'categoryName') {
            setCategoryName(value);
        } else if (name === 'newName') {
            setNewName(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(`/api/categories/${categoryName}`, { name: newName });
            alert(`Kategorie ${response.data.name} erfolgreich geändert`);
            setCategoryName('');
            setNewName('');
        } catch (error) {
            console.error('Error updating category:', error);
            alert('Ändern der Kategorie fehlgeschlagen');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={"head-add"}>
                <h3>Kategorie bearbeiten</h3>
            </div>
            <div className={"font-form"}>
                <label>
                    Aktueller Name:
                    <input type="text" name="categoryName" value={categoryName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Neuer Name:
                    <input type="text" name="newName" value={newName} onChange={handleChange} />
                </label>
            </div>
            <br />
            <button type="submit">Kategorie aktualisieren</button>
        </form>
    );
};

export default EditCategoryForm;