import './Styles/instructivo.css'
import {

  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material'


const Instructivo = () => {
  return (
    <ListItem
      sx={{
        borderBottom: '2px solid #DFDFDF',
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      <ListItemButton
        sx={{
          width: '50px',
        }}
      
      >
        <Typography variant="h6" component="p">
          <h2 className="tittleInstruc">
            Instrucciones para crear una evaluación accesible
          </h2>
          <ul>
            <li className="instrucciones">Enumere cada una de las preguntas</li>
            <li className="instrucciones">
              Diferencie notoriamente cada una de las preguntas
            </li>
            <li className="instrucciones">
              Diferencie notoriamente el título de la pregunta respecto a su
              contenido
            </li>
            <li className="instrucciones">
              Agregue toda la información importante junto a su encabezado
              (ejemplo: puntaje)
            </li>
            <li className="instrucciones">
              Deje un espaciado notorio entre cada una de las preguntas
            </li>
          </ul>
        </Typography>
      </ListItemButton>

      <ListItemButton >
        <Typography variant="h6" component="p">
         <div className='big'>
         <h3 className='preguntas1'></h3>
                <h3 className='preguntas1'>Evaluación de biología</h3>
                <h4 className='preguntas'>
                    1.Pregunta Número 1 (10 puntos)
                </h4>
                <h5 className='preguntas'>
                        ¿Cuál es la función de la mitocondria?
                </h5>
                <h4 className='preguntas'>
                   
                </h4>
                <h4 className='preguntas'>
                    2.Pregunta Número 2 (10 puntos)
                </h4>
                <h5 className='preguntas'>
                        ¿Cuál es la función del núcleo?
                </h5>
                <h4 className='preguntas'>
            
                </h4>
                <h4 className='preguntas'>
                    3.Pregunta Número 3 (10 puntos)
                </h4>
                <h5 className='preguntas'>
                        ¿Cuál es la función del REL?
                </h5>
         </div>
        </Typography>
      </ListItemButton>

     
    </ListItem>
  )
}

export default Instructivo
