import React, { useState ,useEffect} from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "../AddBooks/styles";
import { useNavigate ,useParams} from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { v4 as uuidv4 } from 'uuid'; 
import { deleteBooksTitle, headerTitle } from "../../../utils/constants";

const DeleteBook: React.FC = () => {

    const {id}=useParams();
    const [books,updataeBooks]=useState<dataprops>({ 
        id:"",
        title: "",
        author: "",
        genre: "",
        totalCopies: 0,})
    useEffect(()=>{
        async function getNewData()
        {
            console.log({id});
            const newdata=await axios.get(`http://localhost:5000/books/${id}`);
            console.log(newdata);
            updataeBooks(newdata.data);
        }
       getNewData();
    },[])
   
    const navigate = useNavigate();

    const deleteBook = async () => {
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
    };
    const addBook = () => {
        navigate('/add');
    }

    return (
            <CustomGrid>
                <Grid item>
                <CustomHeader headertitle={deleteBooksTitle} handleAdd={addBook} />
                </Grid>
                <Grid item>
                <Grid container>
                    <Grid item xs={6}>
                    <Text variants="subtitle1" text="Title:" />
                    </Grid>
                    <Grid item xs={6}>
                    <Text variants="subtitle1" text={books.title} />
                    </Grid>
                    </Grid>
                  <Grid container>
                  <Grid item xs={6}>
                   <Text variants="subtitle1" text="Author:" />
                   </Grid>
                   <Grid item xs={6}>
                   <Text variants="subtitle1" text={books.author} />
                   </Grid>
                  </Grid>
                   <Grid container>
                   <Grid item xs={6}>
                   <Text variants="subtitle1" text="Genre:" />
                   </Grid>
                   <Grid item xs={6}>
                   <Text variants="subtitle1" text={books.genre} />
                   </Grid>
                    </Grid>
                    
                    <Grid container>
                    <Grid item xs={6}>
                    <Text variants="subtitle1" text="Total Copies:" />
                    </Grid>
                    <Grid item xs={6}>
                    <Text variants="subtitle1" text={books.totalCopies.toString()}/>
                    </Grid>
                    </Grid>
                    <Grid container sx={{ marginTop: '15px' }}>
                        <Grid item xs={4}><CustomButton label="Delete" handleClick={deleteBook} variants="contained" /></Grid>
                    </Grid>
                </Grid>
            </CustomGrid>
    );
}

export default DeleteBook;
