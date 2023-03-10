import {
  Button,
  ButtonGroup,
  IconButton,
  CircularProgress,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import EmptyListParagraph from "../../components/EmptyListParagraph";
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

const Page = ({ data, handleSeeExam, score, exam, handleReadAnswer,   nameExam,}) => {
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
  <Typography variant="h5" component="p">
                   Corrección del {nameExam}
                    
        </Typography>
  </List>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          marginY: "10px",
          overflowX: "hidden",
          overflowY: "scroll",
          height: "80%",
          display: "flex",
          flexDirection: "row",
        
        }}
      >
       <object data={exam} type="application/pdf" width="50%" height="100%">
          <Typography variant="h6" component="h6">
            No se pudo mostrar la evaluación
            <a href={exam}>Ir a la evaluación</a>
          </Typography>
        </object>
        
        <List
          sx={{
            overflowX: "hidden",
            height: "100%%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          
        >
          
          {loading ? (
            <CircularProgress />
          ) : data.length === 0 ? (
            <EmptyListParagraph emptyList={"Respuestas"} />
          ) : (
            data.map((data, index) => {
              return (
                <ListItem
                  key={data.answer_id}
                  sx={{
                    display: "flex",
                    overflow: "hidden",
                    justifyContent: "center",
                  }}
                >
                   
                  <Typography mx={2} component="h6" variant="h6">
                    Pregunta {data.question_id}
                  </Typography>
                  <Box>
                    <TextField
                 size="small"
                      id="standard-basic"
                      label={`Respuesta Pregunta ${data.question_id}`}
                      multiline
                     
                      variant="outlined"
                      disabled
                      value={data.answer_text}
                    />
                     <TextField
                      size="small"
                      id="standard-basic"
                      label={`Comentario Pregunta ${data.question_id}`}
                      multiline
                      variant="outlined"
                      disabled
                      value={data.comment}
                    />
                    <TextField
                      size="small"
                      id="standard-basic"
                      label={`Puntaje Pregunta ${data.question_id}`}
                      multiline
                      variant="outlined"
                      disabled
                      value={data.score}
                    />
                    
                     <IconButton
                    sx={{
                      background: '#F8F32B',
                      marginX: '5px',
                    }}
                    onClick={() => handleReadAnswer("La pregunta número " + data.question_id +"que tuvo por respuesta"+ data.answer_text+ " obtuvo "+ data.score + "puntos y el comentario dejado por el profesor es:"+ data.comment)}
                  >
                    <VolumeUpIcon />
                  </IconButton>
                   
                  </Box>
                  
            
                </ListItem>
                
              );
            })
          )}
        </List>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="contained">
          <form>
            <input
              disabled
              name="qualification"
              value={score}
              required
              type="number"
              min="10"
            
           
              size="small"
              placeholder="Calificación"
              id="standard-basic"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderColor: "#fff",
              }}
            />
             <IconButton
                    sx={{
                      background: '#F8F32B',
                      marginX: '5px',
                    }}
                    onClick={() => handleReadAnswer("La calificación obtenida es " + score)}
                  >
                    <VolumeUpIcon />
                  </IconButton>
          </form>
         
          
        </ButtonGroup>
      </Box>
    </>
  );
};

export default Page;
