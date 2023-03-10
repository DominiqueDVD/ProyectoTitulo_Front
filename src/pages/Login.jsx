import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { StartLogin } from "../redux/actions/authActions";
import logo from '../assets/logo.png';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, handleInputChange, resetValues] = useForm({
    email: "",
    password: "",
    checked: 0,
  });

  const { email, password, checked } = values;

  const handleOnSubmit = async (ev) => {
    ev.preventDefault();
    // console.log(values);
    dispatch(StartLogin(values));
  };

  useEffect(() => {
    // const token = window.localStorage.getItem("jwt");
    // if (!token) return;
    // navigate("/");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(180deg, rgba(75,70,184,1) 34%, rgba(3,167,192,1) 66%, rgba(255,255,255,1) 90%)",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        textAlign={"center"}
        sx={{
          marginTop: "60px",
          color: "#ffffff",
          fontWeight: 700,
        }}
      >
        Bienvenid@ a Inclubb
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        textAlign={"center"}
        sx={{
          color: "#ffffff",
          fontWeight: 300,
        }}
      >
        Plataforma institucional para la toma de evaluaciones accesibles
       
      </Typography>
  
      <form
      
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "43px",
          marginTop: "40px",
        }}
        onSubmit={(ev) => handleOnSubmit(ev)}
      >  <img src={logo} width={"200px"}/>
          
        <Typography
          variant="h4"
          component="h4"
          textAlign={"center"}
          sx={{
            color: "#000",
            fontWeight: 700,
            marginTop: 2,
          }}
          
        >
          
         
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          textAlign={"center"}
          sx={{
            color: "#686666",
            
          }}
        >
          Ingrese sus Credenciales
        </Typography>
        <TextField
          required
          type="email"
          fullWidth
          label="Correo"
          id="fullWidth"
          variant="outlined"
          sx={{
            marginY: "40 px",
            marginTop: 2,
          }}
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          required
          type="password"
          label="Contraseña"
          id="fullWidth"
          variant="outlined"
          sx={{
            marginY: "40px",
          }}
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <FormControlLabel
          onChange={(ev) => {
            let value = ev.target.checked ? 1 : 0;
            handleInputChange({
              target: {
                name: "checked",
                value: value,
              },
            });
          }}
          control={<Checkbox defaultChecked />}
          label="Recordar mis datos"
          value={checked}
        />
        <Button type="submit" variant="contained">
          INGRESAR
        </Button>
      </form>
      <Typography
        
        sx={{
          marginTop: "40px",
         
        }}
        
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Escudo_Universidad_del_B%C3%ADo-B%C3%ADo.png" alt="" height={"100px"} />
        <img width={"100px"} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c64cfe3-bb3b-4ae8-b5a6-d2f39d21ff87/d3jme6i-8c702ad4-4b7a-4763-9901-99f8b4f038b0.png/v1/fill/w_600,h_400,strp/fondo_transparente_png_by_imsnowbieber_d3jme6i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvOWM2NGNmZTMtYmIzYi00YWU4LWI1YTYtZDJmMzlkMjFmZjg3XC9kM2ptZTZpLThjNzAyYWQ0LTRiN2EtNDc2My05OTAxLTk5ZjhiNGYwMzhiMC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ymv-MHRcmXXpzmL3f0xZ0mCcyU85lCLnk0jbOnCO8Zg" alt="" />
        
        <img src="https://images.genial.ly/5eb58965b464cf6161e2b6ed/a04bdbbc-bce0-4926-8e9d-a7e21d95838a.png" alt="" width={"80px"}/>


     

      </Typography>
   
    </Box>
  );
};

export default Login;
