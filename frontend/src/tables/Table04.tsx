import { useState } from 'react';

type Category = {
    id: number;
    name: string;
};

const Table04: React.FC = () => {
    const [category] = useState<Category>({
        id: Math.floor(Math.random() * 100),
        name: 'Tisch 4'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Category:', category);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className={"head-tables"}>TISCH 4</p>
            <input type="hidden" name="id" value={category.id} />
            <br />
        </form>
    );
};

export default Table04;