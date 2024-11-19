import React from "react";
import { CustomBox } from "./styles";
import {bookstoretemplateprops} from "../../utils/interfaces"
const BookStoreTemplate: React.FC<bookstoretemplateprops> = ({ children }) => {
    return (
        <CustomBox>
            {children}
        </CustomBox>
    );
};

export default BookStoreTemplate;
