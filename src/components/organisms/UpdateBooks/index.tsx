import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "../AddBooks/styles";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { v4 as uuidv4 } from 'uuid'; 

import { booksprops } from "../../../utils/interfaces";
import { updateBooksTitle } from "../../../utils/constants";

const UpdateBook: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<booksprops>({
        title: "",
        author: "",
        genre: "",
        totalCopies: 0
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await axios.get<booksprops>(`http://localhost:5000/books/${id}`);
                const { title, author, genre, totalCopies } = response.data;
                setBook({ title, author, genre, totalCopies });
            } catch (error) {
                console.error("Error fetching book data:", error);
            }
        };
        fetchBookData();
    }, [id]);
   
    const updateBookDetails = async () => {
        if(!book.title||!book.author||!book.genre||book.totalCopies===undefined){
            alert("Please fill all the fields");
            return;
        }
        if(book.totalCopies<=0)
        {
            alert("Please enter a valid number of copies");
            return;
        }
        try {
            await axios.put(`http://localhost:5000/books/${id}`, book);
            navigate("/");
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    const changeBookDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const addBook = () => {
        navigate('/add');
    }

    return (
            <CustomGrid>
                <Grid item>
                <CustomHeader headertitle={updateBooksTitle} handleAdd={addBook} />
                </Grid>
                <Grid item>
                    <Text variants="subtitle1" text="Title" />
                    <CustomInput variant="outlined" type="text" name="title" value={book.title} onChange={changeBookDetails} />
                    <Text variants="subtitle1" text="Author" />
                    <CustomInput variant="outlined" type="text" name="author" value={book.author} onChange={changeBookDetails} />
                    <Text variants="subtitle1" text="Genre" />
                    <CustomInput variant="outlined" type="text" name="genre" value={book.genre} onChange={changeBookDetails} />
                    <Text variants="subtitle1" text="Total Copies" />
                    <CustomInput variant="outlined" type="number" name="totalCopies" value={book.totalCopies} onChange={changeBookDetails} />
                    <Grid container sx={{ marginTop: '15px' }}>
                        <Grid item xs={4}><CustomButton label="Update" handleClick={updateBookDetails} variants="contained" /></Grid>
                    </Grid>
                </Grid>
            </CustomGrid>
    );
};

export default UpdateBook;
