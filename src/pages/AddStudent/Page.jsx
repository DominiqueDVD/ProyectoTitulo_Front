import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import EmptyListParagraph from '../../components/EmptyListParagraph'

const Page = ({ data, handleAdd }) => {
  const { loading } = useSelector((s) => s?.uiReducer)
  return (
    <>
     <List
        sx={{
        
          color:"white"
   
        }}
      >
      <Button a href="javascript:history.back()" color="inherit" >
                   Volver Atrás
      </Button>
      </List>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Agregar estudiantes
      </Typography>
      <List
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          marginY: '10px',
          overflowX: 'hidden',
          overflowY: 'scroll',
          height: '80%',
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : data.length === 0 ? (
          <EmptyListParagraph emptyList={'Estudiantes para agregar'} />
        ) : (
          data.map((data, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  borderBottom: '2px solid #DFDFDF',
                  display: 'flex',
                  overflow: 'hidden',
                }}
              >
                <ListItemButton
                 sx={{
                  width: "50px",
                }}
                dense={true}
                >
                  <ListItemButton >
                    <Typography variant="h6" component="p">
                    {`${data.name}  ${data.lastname} 
                      
                      `}
                    </Typography>
                  </ListItemButton>
              
                  <ListItemButton >
                    <Typography variant="h6" component="p">
                      {data.rut}
                    </Typography>
                  </ListItemButton>
                </ListItemButton>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => handleAdd(data)}>Agregar</Button>
                </ButtonGroup>
              </ListItem>
            )
          })
        )}
      </List>
    </>
  )
}

export default Page
