import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { v4 as uuidv4 } from 'uuid'; 
import { addBooksTitle } from "../../../utils/constants";

const AddBooks: React.FC = () => {
    const [book, updateBook] = useState<dataprops>({
        id: uuidv4(),
        title: "",
        author: "",
        genre: "",
        totalCopies: 0,
    });

    const navigate = useNavigate();

    const returnBack = () => {
        navigate("/");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateBook({
            ...book,
            [name]: name === "totalCopies" ? parseInt(value) : value,
        });
    };

    const addBook = async () => {
        const { title, author, genre, totalCopies } = book;

        if (!title || !author || !genre || totalCopies === undefined) {
            alert("All fields are required.");
            return;
        }

        if (totalCopies <= 0) {
            alert("Total copies should be greater than 0");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/books", book);
            alert("Successfully added");
            navigate("/");
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book");
        }
    };

    return (
        <CustomGrid>
            <Grid item>
                <CustomHeader headertitle={addBooksTitle} handleAdd={addBook} />
            </Grid>
            <Grid item>
                <Text variants="subtitle1" text="Title" />
                <CustomInput
                    name="title"
                    variant="outlined"
                    type="text"
                    value={book.title}
                    onChange={handleChange}
                />
                <Text variants="subtitle1" text="Author" />
                <CustomInput
                    name="author"
                    variant="outlined"
                    type="text"
                    value={book.author}
                    onChange={handleChange}
                />
                <Text variants="subtitle1" text="Genre" />
                <CustomInput
                    name="genre"
                    variant="outlined"
                    type="text"
                    value={book.genre}
                    onChange={handleChange}
                />
                <Text variants="subtitle1" text="Total Copies" />
                <CustomInput
                    name="totalCopies"
                    variant="outlined"
                    type="number"
                    value={book.totalCopies}
                    onChange={handleChange}
                />
                <Grid container sx={{ marginTop: '15px' }}>
                    <Grid item xs={4}><CustomButton label="Add" handleClick={addBook} variants="contained" /></Grid>
                    <Grid item xs={4}><CustomButton label="Back" handleClick={returnBack} variants="contained" /></Grid>
                </Grid>
            </Grid>
        </CustomGrid>
    );
}

export default AddBooks;
