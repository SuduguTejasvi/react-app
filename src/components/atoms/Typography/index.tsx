import React from "react";
import { Typography } from "@mui/material";
import { textprops } from "../../../utils/interfaces";

const Text:React.FC<textprops>=({variants,text})=>{
    return(<>
    <Typography variant={variants} >{text}</Typography>
    </>)
}
export default Text;