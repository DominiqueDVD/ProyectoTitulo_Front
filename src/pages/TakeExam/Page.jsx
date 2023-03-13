import {
  AlertTitle,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,

  TextField,
  Typography,
  ListItemButton
} from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from "react-redux";
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import OutboxIcon from '@mui/icons-material/Outbox'
import useSound from 'use-sound';
import extra from '../../assets/extra.mp3';
import grabar from '../../assets/grabar.mp3';
import detener from '../../assets/detener.mp3'
import escuchar from '../../assets/escuchar.mp3'

import StopIcon from '@mui/icons-material/Stop'

import EmptyListParagraph from "../../components/EmptyListParagraph";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

const Page = ({
  data,
  handleSeeExam,
  values,
  handleSendExam,
  CircularProgress,
  fragementModals,
  handleStartRecord,
  handleStopRecord,
  handleReadAnswer,
  handleInputChange,
  nameExam,
  courseName,
  exam
}) => {

 


  const [playGrabar] = useSound(
    grabar,
    { volume: 0.2 }
  );
  const [playDetener] = useSound(
    detener,
    { volume: 0.2 }
  );
  const [playEscuchar] = useSound(
    escuchar, 
    { volume: 0.2 }
  );
  const [playExtra] = useSound(
    extra,
    { volume: 0.2 }
  );
  const [isHovering, setIsHovering] = React.useState(
    false
  );
 

  return (
    <>

      <List
        sx={{
          color: 'white',
        }}
      >
   
        <Button a href="javascript:history.back()" color="inherit" onMouseEnter={() => {
                      setIsHovering(true);
                      playExtra(extra);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                   
                    }} isHovering={isHovering}>
          Volver Atrás
        </Button>
        <Typography variant="h5" component="p">
                    {nameExam}
                    
        </Typography>
      </List>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          marginY: '10px',
          overflowX: 'hidden',
          overflowY: 'scroll',
          height: '80%',
          display: 'flex',
          flexDirection: 'row',
      
        }}
      >
        <object data={exam} type="application/pdf" width="50%" height="100%">
          <p>
            <a href="https://africau.edu/images/default/sample.pdf"></a>
          </p>
          <Typography variant="h6" component="h6">
            La evaluación no se encuentra disponible
          </Typography>
        </object>
        <List
          sx={{
            overflowX: 'hidden',
            height: '100%%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {data.map((field) => {
            let name = `response${field}`
            return (
              <ListItem
                key={field}
                sx={{
                  display: 'flex',
                  overflow: 'hidden',
                  justifyContent: 'center',
                }}
              >
                <Typography mx={10} component="h6" variant="h6">
                  Pregunta {field}
                </Typography>
                <TextField
                  onChange={handleInputChange}
                  required
                  mx={10}
                  name={name}
                  id="standard-basic"
                  label={`Respuesta ${field}`}
                  multiline
                  maxRows={4}
                  variant="standard"
                  value={values?.[name] ?? ''}
                />
                <ButtonGroup  
                >
                  <IconButton
                    sx={{
                      background: '#1976d2',
                      marginX: '5px',
                    }}
                    onClick={() => handleStartRecord(name)}
                   
                  >
                    <KeyboardVoiceIcon onMouseEnter={() => {
                      setIsHovering(true);
                      playGrabar(grabar);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                 
                    }} isHovering={isHovering} />
                  </IconButton>
                  <IconButton
                    sx={{
                      background: '#F80000',
                      marginX: '5px',
                    }}
                   
                  >
                    <StopIcon  onMouseEnter={() => {
                      setIsHovering(true);
                      playDetener(detener);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                     
                    }} isHovering={isHovering}/>
                  </IconButton >
                  <IconButton
                    sx={{
                      background: '#F8F32B',
                      marginX: '5px',
                    }}
                    onClick={() => handleReadAnswer(name)}
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
            )
          })}
        </List>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        
        <ButtonGroup variant="contained" onMouseEnter={() => {
                      setIsHovering(true);
                      playExtra(extra);
                    }}
                    onMouseLeave={() => {
                      setIsHovering(false);
                
                    }} isHovering={isHovering} >
          <Button startIcon={<OutboxIcon />} onClick={() => handleSendExam()}>
            ENVIAR RESPUESTAS
          </Button>
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
  )
}

export default Page
