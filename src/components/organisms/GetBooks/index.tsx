import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CustomHeader from "../../molecules/Header";
import { CustomGrid, CustomInput } from "../AddBooks/styles";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import Text from "../../atoms/Typography";
import CustomButton from "../../atoms/Buttons";
import { dataprops } from "../../../utils/interfaces";
import { getBooksTitle } from "../../../utils/constants";

const GetBook: React.FC = () => {
    const navigate=useNavigate();
    const {id}=useParams();

    const returnBack = () => {
        navigate("/");
    };
    const addBook = () => {
        navigate('/add');
    }


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
   
    return (
            <CustomGrid>
                <Grid item>
                <CustomHeader headertitle={getBooksTitle} handleAdd={addBook} />
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
                        <Grid item xs={6}><CustomButton label="Back" handleClick={returnBack} variants="contained" /></Grid>
                    </Grid>
                </Grid>
            </CustomGrid>
    );
}

export default GetBook;
