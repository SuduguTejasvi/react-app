import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { dataactionsprops } from '../../../utils/interfaces';

type IconButtonColor = 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';

const DataActions: React.FC<dataactionsprops> = ({
  handleGetData,
  handleUpdateData,
  handleDeleteData,
}) => {
  const actions = [
    { action: handleGetData, color: 'primary' as IconButtonColor, label: 'get data', icon: <Visibility /> },
    { action: handleUpdateData, color: 'secondary' as IconButtonColor, label: 'update data', icon: <Edit /> },
    { action: handleDeleteData, color: 'error' as IconButtonColor, label: 'delete data', icon: <Delete /> },
  ];

  return (
    <Box>
      {actions.map(({ action, color, label, icon }, index) => (
        <IconButton key={index} onClick={action} aria-label={label} color={color}>
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default DataActions;
