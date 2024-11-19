import { styled } from "@mui/material";
import {Box} from "@mui/material";
export const StyledTableContainer = styled(Box)({
    width: '80%',
    margin: '0 auto',
    maxHeight: '400px', // Set the max height for scroll
    overflowY: 'auto', // Enable vertical scroll
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  });
  