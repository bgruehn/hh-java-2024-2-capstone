import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './tableOrder.css';

const Table01 = () => {
    const [categories, setCategories] = useState([]);
    const parameter = useParams();
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        if (showCategories) {
            fetchCategories();
        }
    }, [showCategories]);

    const handleShowCategories = () => {
        setShowCategories(true);
    };

    return (
        <div className="add-product-container">
            <div className="head-add-product">{parameter.id}</div>
            {!showCategories && (
                <button className="custom-button-add" onClick={handleShowCategories}>
                    Produkt hinzufügen
                </button>
            )}
            {showCategories && categories.length > 0 && (
                <div className="category-buttons">
                    {categories.map(category => (
                        <button key={category.id} className="category-button-add">
                            {category.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Table01;