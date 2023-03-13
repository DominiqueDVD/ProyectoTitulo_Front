import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import EmptyListParagraph from "../../components/EmptyListParagraph";
import useSound from 'use-sound';
import escuchar from '../../assets/escuchar.mp3';

const Page = ({ data, handleSeeCorrections, handleReadAnswer}) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  const [playEscuchar] = useSound(
    escuchar, 
    { volume: 0.2 }
  );
  const [isHovering, setIsHovering] = React.useState(
    false
  );
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
        Correcciones
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
          <EmptyListParagraph emptyList={"examenes corregidos"} />
        ) : (
          data.map((data) => {
            return (
              <ListItem
                key={`${data.studentExam_id}-${data.exam_name}`}
                sx={{
                  borderBottom: "2px solid #DFDFDF",
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                <ListItemButton
                  sx={{
                    width: "50px",
                  }}
                  dense={true}
                >
                  <Typography variant="h6" component="p">
                    Evaluación: {data.name}
                  </Typography>
                  <Typography mx={10} variant="h6" component="p">
                    Nota: {data.score}
                  </Typography>
                </ListItemButton>

                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => handleSeeCorrections(data)}>
                    Ver correciones
                  </Button>
                  <IconButton
                    sx={{
                      background: '#F8F32B',
                      marginX: '5px',
                    }}
                    onClick={() => handleReadAnswer("En la evaluación"+data.name+"se obtuvo la calificación"+data.score)}
                  >
                    <VolumeUpIcon onMouseEnter={() => {
                      setIsHovering(true);
                      playEscuchar(escuchar);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                     
                    }} isHovering={isHovering}/>
                  </IconButton>
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
