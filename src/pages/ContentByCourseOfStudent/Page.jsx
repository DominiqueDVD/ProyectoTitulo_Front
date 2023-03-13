import {
  Button,
  ButtonGroup,
  CircularProgress,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { FiltersByDocuments } from '../../components/ContainersFiltersForTeacher'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import EmptyListParagraph from '../../components/EmptyListParagraph'
import useSound from 'use-sound'
import escuchar from '../../assets/escuchar.mp3'

const Page = ({
  data,
  handleSeeContens,
  handleTakeExam,
  cours,
  handleReadAnswer,
  x,
}) => {
  const { loading } = useSelector((s) => s?.uiReducer)
  const [playEscuchar] = useSound(escuchar, { volume: 0.2 })
  const [isHovering, setIsHovering] = React.useState(false)

  const condicion = (data) => {
    if (data === 1) {
      handleReadAnswer('Evaluación')
    } else {
      handleReadAnswer('Material')
    }
  }

  const condicion2 = (x, data) => {
    if (x === 1) {
      return <Button onClick={() => handleTakeExam(data)}>REALIZAR</Button>
    }
  }

  return (
    <>
      <List
        sx={{
          color: 'white',
        }}
      >
        <Button a href="javascript:history.back()" color="inherit">
          Volver Atrás
        </Button>

        <Typography variant="h5">Contenido del curso</Typography>
      </List>

      <Typography
        sx={{
          color: '#fff',
        }}
        variant="h5"
        component="span"
      >
        {loading ? (
          <CircularProgress />
        ) : cours.length === 0 ? (
          <EmptyListParagraph emptyList={'contenido'} />
        ) : (
          cours.map((cours) => {
            return (
              <ListItemButton
                sx={{
                  width: '100%',
                  marginLeft: '-15px',
                }}
                dense={true}
              ></ListItemButton>
            )
          })
        )}
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
          <EmptyListParagraph emptyList={'contenido'} />
        ) : (
          data.map((data) => {
            return (
              <ListItem
                key={`${data.id}-${data.name}-${data.description}`}
                sx={{
                  borderBottom: '2px solid #DFDFDF',
                  display: 'flex',
                  overflow: 'hidden',
                }}
              >
                <ListItemButton
                  sx={{
                    width: '70%',
                  }}
                  dense={true}
                >
                  <Typography variant="h6" component="p">
                    {data.name}
                  </Typography>
                </ListItemButton>
                <ListItemButton
                  sx={{
                    width: '70%',
                  }}
                  dense={true}
                ></ListItemButton>

                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button onClick={() => handleSeeContens(data.link)}>
                    VER
                  </Button>
                  {condicion2(data.type, data)}
                  <IconButton
                    sx={{
                      background: '#F8F32B',
                      marginX: '5px',
                    }}
                    onClick={() =>
                      condicion(data.type) + handleReadAnswer(data.name)
                    }
                  >
                    <VolumeUpIcon
                      onMouseEnter={() => {
                        setIsHovering(true)
                        playEscuchar(escuchar)
                      }}
                      onMouseLeave={() => {
                        setIsHovering(false)
                      }}
                      isHovering={isHovering}
                    />
                  </IconButton>
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
