import {Route, Routes} from "react-router-dom";

import './product-card.css'
import './buttons/tables.css'

import Homepage from "./Homepage.tsx";
import Table01 from "./tables/Table01.tsx";

function App() {
    return <Routes>
        <Route path="/" element=<Homepage/>/>
        <Route path="/tables/:id" element={<Table01/>}/>
    </Routes>
}

export default App
