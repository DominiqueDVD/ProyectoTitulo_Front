import {
    Button,
    ButtonGroup,
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import { useSelector } from "react-redux";
  import EmptyListParagraph from "../../components/EmptyListParagraph";
  import AddIcon from "@mui/icons-material/Add";
  
  const Page = ({
    data,
    handleEdit,
    handleDelete,
    handleCreate,
    fragmentModals,
  }) => {
    const { loading } = useSelector((s) => s?.uiReducer);
    return (
      <> <List
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
        Administrar periodos
      </Typography>
        <List
        
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            marginY: "10px",
            overflowX: "hidden",
            overflowY: "scroll",
            height: "80%",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : data.length === 0 ? (
            <EmptyListParagraph emptyList={"Periodos"} />
          ) : (
            data.map((data, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    borderBottom: "2px solid #DFDFDF",
                    display: "flex",
                    overflow: "hidden",
                  }}
                >
                  <ListItemButton
                    sx={{
                      width: "70%",
                    }}
                    dense={true}
                  >
                    <Typography variant="h6" component="p">
                      {data.name}
                    </Typography>
                  </ListItemButton>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button onClick={() => handleEdit(data)}>EDITAR</Button>
                    <Button onClick={() => handleDelete(data)}>ELIMINAR</Button>
                  </ButtonGroup>
                </ListItem>
              );
            })
          )}
        </List>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            onClick={() => handleCreate()}
          >
            Agregar Periodo
          </Button>
          {fragmentModals}
        </Box>
      </>
    );
  };
  
  export default Page;