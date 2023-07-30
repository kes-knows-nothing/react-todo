import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList3 from "./version3/ToDoList3";
import ToDoList1 from "./version1/ToDoList1";
import ToDoList2 from "./version2/ToDoList2";


function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ToDoList3 />} />
                <Route path="/v1" element={<ToDoList1 />} />
                <Route path="/v2" element={<ToDoList2 />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;