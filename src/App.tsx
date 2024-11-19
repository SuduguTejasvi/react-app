import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksTable from "./components/organisms/BooksTable";
import Add from "./components/organisms/AddBooks";
import Delete from "./components/organisms/DeleteBooks";
import Get from "./components/organisms/GetBooks";
import UpdateBook from "./components/organisms/UpdateBooks";
import NotFound from "./components/organisms/NotFoundPage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./themes";
import BookStorePage from "./pages";
import StudentInformation from "./components/StudentInformation";
const App: React.FC = () => {
    const students=[{id:'1',name:'tejasvi',marks:220},{id:'2',name:'priya',marks:200},{id:'3',name:'riya',marks:260}]
    return (
        <>
            <ThemeProvider theme={Theme}>
            <BookStorePage/>
           
            </ThemeProvider>
            
        </>
    );
}

export default App;
