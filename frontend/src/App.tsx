import './product-card.css'
import './tables/tables.css'
import AddProductForm from "./AddProductForm.tsx";
import AddCategoryForm from "./AddCategoryForm.tsx";
import Table01 from "./tables/Table01.tsx";
import Table02 from "./tables/Table02.tsx";
import Table03 from "./tables/Table03.tsx";
import Table04 from "./tables/Table04.tsx";
import Table05 from "./tables/Table05.tsx";
import Table06 from "./tables/Table06.tsx";
import Table07 from "./tables/Table07.tsx";
import Table08 from "./tables/Table08.tsx";
import Table09 from "./tables/Table09.tsx";
import Table10 from "./tables/Table10.tsx";
import Table11 from "./tables/Table11.tsx";
import Table12 from "./tables/Table12.tsx";
import Table13 from "./tables/Table13.tsx";
import Table14 from "./tables/Table14.tsx";
import Table15 from "./tables/Table15.tsx";
import Table16 from "./tables/Table16.tsx";

function App() {
    return (
        <div className="body">
            <div className="header-background">
                <div className="h1">
                <h1>Gastro-Kassenprogramm</h1>
                </div>
            </div>
            <div className="table-container">
                <div className={"tables"}>
                    <Table01/>
                </div>
                <div className={"tables"}>
                    <Table02/>
                </div>
                <div className={"tables"}>
                    <Table03/>
                </div>
                <div className={"tables"}>
                    <Table04/>
                </div>
                <div className={"tables"}>
                    <Table05/>
                </div>
                <div className={"tables"}>
                    <Table06/>
                </div>
                <div className={"tables"}>
                    <Table07/>
                </div>
                <div className={"tables"}>
                    <Table08/>
                </div>
                <div className={"tables"}>
                    <Table09/>
                </div>
                <div className={"tables"}>
                    <Table10/>
                </div>
                <div className={"tables"}>
                    <Table11/>
                </div>
                <div className={"tables"}>
                    <Table12/>
                </div>
                <div className={"tables"}>
                    <Table13/>
                </div>
                <div className={"tables"}>
                    <Table14/>
                </div>
                <div className={"tables"}>
                    <Table15/>
                </div>
                <div className={"tables"}>
                    <Table16/>
                </div>
            </div>
            <div className={"prod-cat-container"}>
                <div className={"product-card"}>
                <AddCategoryForm/>
            </div>
            <div className={"product-card"}>
                <AddProductForm/>
            </div>
            </div>
            {/*<EditProductForm/>*/}
            {/*<addCategory/>*/}
            {/*<editProduct/>*/}
            {/*<editCategory/>*/}
        </div>
    )
}

export default App
