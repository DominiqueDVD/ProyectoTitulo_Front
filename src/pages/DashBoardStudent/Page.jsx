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
import EmptyListParagraph from "../../components/EmptyListParagraph";
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import useSound from 'use-sound';
import extra from '../../assets/extra.mp3';
import escuchar from '../../assets/escuchar.mp3';


const Page = ({ data, handleSeeMaterial, handleReadAnswer }) => {
  const { loading } = useSelector((s) => s?.uiReducer);
  const [playExtra] = useSound(
    extra,
    { volume: 0.2 }
  );
  const [playEscuchar] = useSound(
    escuchar, 
    { volume: 0.2 }
  );
  const [isHovering, setIsHovering] = React.useState(
    false
  );
  return (
    <>
      <Typography
        sx={{
          color: "#fff",
          marginRight: "10px",
        }}
        variant="h5"
        component="span"
      >
        Listado de cursos
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
          <EmptyListParagraph emptyList={"cursos"} />
        ) : (
          data.map((data) => {
            return (
              <ListItem
                key={data.course_id}
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
                    {data.name}
                  </Typography>
                </ListItemButton>
                <ListItemButton dense={true}>
                  <Typography variant="h6" component="p">
                    {data.career}
                  </Typography>
                </ListItemButton>
                <ListItemButton dense={true}>
                  <Typography variant="h6" component="p">
                    {data.period}
                  </Typography>
                </ListItemButton>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onMouseEnter={() => {
                      setIsHovering(true);
                      playExtra(extra);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                   
                    }} isHovering={isHovering} onClick={() => handleSeeMaterial(data) }>
                    INGRESAR
                  </Button>
                  <IconButton
                    sx={{
                      background: '#F8F32B',
                      marginX: '5px',
                    }}
                    onClick={() => handleReadAnswer("Curso de" + data.name )+handleReadAnswer("de la carrera de" + data.career)+handleReadAnswer("del periodo" + data.period)}
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
