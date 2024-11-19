import React, { useEffect, useState } from "react";
import { IconButton, Grid ,Box} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Add } from '@mui/icons-material';
import DataActions from "../../molecules/Actions";
import CustomHeader from "../../molecules/Header";
import { useNavigate } from "react-router-dom";
import { dataprops } from '../../../utils/interfaces';
import { StyledTableContainer } from './styles';
import Text from "../../atoms/Typography";
import { headerTitle } from "../../../utils/constants";

const BooksTable: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<dataprops[]>([]);

    useEffect(() => {
        async function getBooks() {
            try {
                const response = await axios.get("http://localhost:5000/books");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        }
        getBooks();
    }, []);

   

    const  getBook = (id: string) => {
        navigate(`/get/${id}`);
    }

    const updateBookDetails = (id: string) => {
        navigate(`/update/${id}`);
    }

    const deleteBook = async (id: string) => {
        try {
            let flag=window.confirm("Are you sure you want to delete this book?");
            if(flag){
                console.log("Deletion");
                console.log({id});
                const response =   await axios.delete(`http://localhost:5000/books/${id}`);
                console.log(response.data);

            }
            else{
                alert("Book not deleted");

            }
            navigate("/");
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book");
        }
        
    }

    const addBook= () => {
        navigate('/add');
    }

    return (
        <Box sx={{marginTop:'15px'}}>   
            <Grid container>
                <Grid item xs={12} >
                    <CustomHeader headertitle={headerTitle} handleAdd={addBook} />
                </Grid>
                {/* <Grid item xs={1}>
                    <IconButton aria-label="add" onClick={handleAdd} color="success">
                        <Add />
                    </IconButton>
                </Grid> */}
            </Grid>
            <br />

            <StyledTableContainer>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.No</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Author</TableCell>
                                <TableCell align="right">Genre</TableCell>
                                <TableCell align="right">Total Copies</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((book, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{index + 1}</TableCell>
                                    <TableCell align="right">{book.title}</TableCell>
                                    <TableCell align="right">{book.author}</TableCell>
                                    <TableCell align="right">{book.genre}</TableCell>
                                    <TableCell align="right">{book.totalCopies}</TableCell>
                                    <TableCell align="right">
                                        <DataActions
                                            handleGetData={() => getBook(book.id)}
                                            handleUpdateData={() => updateBookDetails(book.id)}
                                            handleDeleteData={() => deleteBook(book.id)}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledTableContainer>
        </Box>
    );
};

export default BooksTable;







