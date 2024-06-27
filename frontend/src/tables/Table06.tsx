import { useState } from 'react';

type Category = {
    id: number;
    name: string;
};

const Table06: React.FC = () => {
    const [category] = useState<Category>({
        id: Math.floor(Math.random() * 100),
        name: 'Tisch 6'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Category:', category);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className={"head-tables"}>TISCH 6</p>
            <input type="hidden" name="id" value={category.id} />
            <br />
        </form>
    );
};

export default Table06;