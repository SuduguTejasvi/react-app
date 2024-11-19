import React from "react";
import Text from "../../atoms/Typography";
import { CustomBox } from "./styles";
import {customheaderprops} from '../../../utils/interfaces';
import { IconButton } from "@mui/material";
import { Add } from '@mui/icons-material';

const CustomHeader:React.FC<customheaderprops>=({headertitle,handleAdd})=>{
    return(
        <CustomBox>
            <Text variants="h4" text={headertitle}/>
            <IconButton aria-label="add" onClick={handleAdd} color="success">
                 <Add />
            </IconButton>
        </CustomBox>
    )
}
export default CustomHeader;