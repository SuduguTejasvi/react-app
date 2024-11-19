import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import BooksTable from "../components/organisms/BooksTable";
import AddBooks from "../components/organisms/AddBooks";
import UpdateBook from "../components/organisms/UpdateBooks";
import GetBook from "../components/organisms/GetBooks";
import DeleteBook from "../components/organisms/DeleteBooks";
import NotFound from "../components/organisms/NotFoundPage";
const BookStorePage:React.FC=()=>{
    return(
         <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BooksTable />} />
                    <Route path="/add" element={<AddBooks />} />
                    <Route path="/update/:id" element={<UpdateBook/>} />
                    <Route path="/get/:id" element={<GetBook />} />
                    <Route path="/delete/:id" element={<DeleteBook/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
    )
}

export default BookStorePage;