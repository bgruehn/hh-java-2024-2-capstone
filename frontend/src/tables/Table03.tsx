import { useState } from 'react';

type Category = {
    id: number;
    name: string;
};

const Table03: React.FC = () => {
    const [category] = useState<Category>({
        id: Math.floor(Math.random() * 100),
        name: 'Tisch 3'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Category:', category);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className={"head-tables"}>TISCH 3</p>
            <input type="hidden" name="id" value={category.id} />
            <br />
        </form>
    );
};

export default Table03;