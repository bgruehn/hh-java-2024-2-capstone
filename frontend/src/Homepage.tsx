import Button01 from "./buttons/Button01.tsx";
import AddCategoryForm from "./AddCategoryForm.tsx";
import EditCategoryForm from "./EditCategoryForm.tsx";
import AddProductForm from "./AddProductForm.tsx";
import EditProductForm from "./EditProductForm.tsx";

export default function Homepage() {
const tableNames= ["TISCH 1", "TISCH 2", "TISCH 3", "TISCH 4", "TISCH 5", "TISCH 6", "TISCH 7", "TISCH 8", "TISCH 9", "TISCH 10", "TISCH 11", "TISCH 12", "TISCH 13", "TiSCH 14", "TISCH 15", "TISCH 16"];

    return (
        <div className="body">
            <div className="header-background">
                <div className="h1">
                    <h1>Gastro-Kassenprogramm</h1>
                </div>
            </div>
            <div className="table-container">
                {tableNames.map(tableName => (<div>
                    <Button01 name={tableName}/>
                </div>))}
            </div>
            <div className={"prod-cat-container"}>
                <div className={"product-card"}>
                    <AddCategoryForm/>
                </div>
                <div className={"product-card"}>
                    <EditCategoryForm/>
                </div>
                <div className={"product-card"}>
                    <AddProductForm/>
                </div>
                <div className={"product-card"}>
                    <EditProductForm/>
                </div>
            </div>
        </div>
    )
}