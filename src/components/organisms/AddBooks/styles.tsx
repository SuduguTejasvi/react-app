import { Grid, styled, TextField } from "@mui/material";

export const CustomGrid=styled(Grid)({
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    height:'100vh',
    gap:"10px"


});
export const CustomInput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '30px'
    }
});