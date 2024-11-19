import React from "react";
import { Button  } from "@mui/material";
import { buttonprops } from '../../../utils/interfaces';

const CustomButton: React.FC<buttonprops> = ({ variants, handleClick, label }) => {
    return (
        <Button variant={variants} onClick={handleClick}>
            {label}
        </Button>
    );
}

export default CustomButton;
