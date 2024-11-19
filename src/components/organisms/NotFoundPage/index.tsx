import React from "react";
import { Typography ,Box} from "@mui/material";
import Text from "../../atoms/Typography"; 

const NotFound: React.FC = () => {
    // const navigate = useNavigate();
    return (
        <Box>
            <Text variants="h6" text="This is Not Found Page" />
        </Box>
    );
}

export default NotFound;
