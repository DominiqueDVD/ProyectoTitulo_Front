import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  ListItemButton,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import OutboxIcon from "@mui/icons-material/Outbox";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import EmptyListParagraph from "../../components/EmptyListParagraph";

const Page = ({
  correctionsAnswer,
  handleCorrectionsAnswer,
  values,
  handleInputChange,
  data,
  data2,
  handleSendCorrectionAnswer,
  handleSeeExam,
  handleOnSubmit,
  fragementModals,
  exam,
}) => {
  
  const { points, retro } = values;
  const { loading } = useSelector((s) => s?.uiReducer);
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
  <List
    
      >
        {loading ? (
          <CircularProgress />
        ) : data2.length === 0 ? (
          <EmptyListParagraph emptyList={"estudiantes"} />
        ) : (
          data2.map((data2) => {
            return (
              <ListItem
                key={`${data2.studentExam_id}-${data2.exam_name}`}
                sx={{
                
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                <ListItemButton
                  sx={{
                    width: "50px",
                    marginLeft: "-30px"
                  }}
                  dense={true}
                >
                  <Typography variant="h6" component="p">
                    Evaluación: {data2.exam_name} 
                  </Typography>
                  <Typography mx={10} variant="h6" component="p">
                    Respuestas de: {data2.student_name}
                  </Typography>
                </ListItemButton>

              
              </ListItem>
            );
          })
        )}
      </List>
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
          justifyContent: "center",
        }}
      >
         <object data={exam} type="application/pdf" width="40%" height="100%">
          <Typography variant="h6" component="h6">
            No se pudo mostrar el exam
            <a href={exam}>Ir al examen</a>
          </Typography>
        </object>
        <List
          sx={{
            overflowX: "hidden",
            height: "100%",
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
              let comment = `comment${index + 1}`;
              let score = `score${index + 1}`;
              return (
                <ListItem
                  key={data.answer_id}
                  sx={{
                    display: "flex",
                    overflow: "hidden",
                    justifyContent: "center",
                  }}
                >
                  <Typography mx={5} component="h6" variant="h6">
                    Pregunta {data.question_id}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <TextField
                      mx={10}
                      id="standard-basic"
                      label={`Respuesta Pregunta ${data.question_id}`}
                      multiline
                      maxRows={3}
                      variant="outlined"
                      disabled
                      value={data.answer_text}
                    />
                 <TextField
                      type="text"
                      id="standard-basic"
                      label="Comentario"
                      variant="outlined"
                      required
                      name={comment}
                      value={correctionsAnswer[comment] ?? ""}
                      onChange={handleCorrectionsAnswer}
                    />
                    <TextField
                      type="number"
                      id="standard-basic"
                      label="Puntaje"
                      variant="outlined"
                      required
                      name={score}
                      value={correctionsAnswer[score] ?? ""}
                      onChange={handleCorrectionsAnswer}
                    />
                  
            <Button
                      startIcon={<CheckIcon />}
                      onClick={() =>
                        handleSendCorrectionAnswer(
                          index + 1,
                          data.answer_id,
                          1,
                          comment,
                          score
                        )
                      }
                    ></Button>
                    <Button
                      startIcon={<CloseIcon />}
                      onClick={() =>
                        handleSendCorrectionAnswer(
                          index + 1,
                          data.answer_id,
                          0,
                          comment,
                          score
                        )
                      }
                    ></Button>
                 </Box>
                 </ListItem>
              );
            })
          )}
        </List>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonGroup variant="contained">
          <form onSubmit={handleOnSubmit}>
            <input
              name="qualification"
              disabled
              onChange={handleInputChange}
              value={values?.qualification}
              required
              type="number"
              min="10"
            
              variant="outlined"
              size="small"
              placeholder="Ingresar Calificación"
              id="standard-basic"
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderColor: "#fff",
              }}
            />
            <Button
              type="submit"
              startIcon={<OutboxIcon />}
              sx={{
                height: "100%",
              }}
            >
              ENVIAR CORRECIÓN
            </Button>
          </form>
          <Button
            startIcon={<VisibilityIcon />}
            onClick={() => handleSeeExam()}
          >
            VER EXAMEN
          </Button>
        </ButtonGroup>
        {fragementModals}
      </Box>
    </>
  );
};

export default Page;
