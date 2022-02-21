import * as React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTarefa from './EditTarefa';

export default function TodoItem({tarefa, deleteTarefa, editTarefa}) {
  
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog)
  }

  return (

    <>
    <EditTarefa open={openDialog} dialogHandler={dialogHandler} tarefa={tarefa} editTarefa={editTarefa}/>
    <Paper style={{ padding: "0.5em 0em" }} >
      <ListItem
           
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={ () => deleteTarefa(tarefa.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined}  dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  
                  tabIndex={-1}
                  disableRipple
                  
                />
              </ListItemIcon>
              <ListItemText primary={tarefa.text} onClick={() => setOpenDialog(true)}/>
            </ListItemButton>
          </ListItem>

    </Paper>
    </>
  );
}
