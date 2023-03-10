import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { FiltersByDocuments } from "../../components/ContainersFiltersForTeacher";
import EmptyListParagraph from "../../components/EmptyListParagraph";

const Page = ({ data, handleSeeContens, handleTakeExam, cours }) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  return (
    <>
      {/* <FiltersByDocuments /> */}
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
        
        }}
        variant="h5"
        component="span"
      >
         {loading ? (
          <CircularProgress />
        ) : cours.length === 0 ? (
          <EmptyListParagraph emptyList={"contenido"} />
        ) : (
          cours.map((cours) => {
            return (
             
                <ListItemButton
                  sx={{
                    width: "100%",
                    marginLeft: "-15px"
                  }}
                  dense={true}
                >
                  <Typography variant="h5" >
                  Contenido del curso "{cours.name}"
                    
                  </Typography>
                </ListItemButton>

            
              
            );
          })
        )}
       
        
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
          <EmptyListParagraph emptyList={"contenido"} />
        ) : (
          data.map((data) => {
            return (
              <ListItem
                key={`${data.id}-${data.name}-${data.course_id}`}
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
                  <Button onClick={() => handleSeeContens(data.link)}>
                    VER
                  </Button>
                  <Button onClick={() => handleTakeExam(data)}>REALIZAR</Button>
                </ButtonGroup>
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

export default Page;
