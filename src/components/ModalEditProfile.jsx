import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  MenuItem,
  Select,
  ButtonGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { BoxContainer, BoxPrincipal, ModalStyle } from "./styles/stylesModals";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { StartEditProfile } from "../redux/actions/profileActions";

const ModalEditProfile = ({ isOpen, handleOnClose }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { profile } = useSelector((s) => s?.profileReducer);
  // const [values, handleInputChange] = useForm(profile); TODO:implementar

  useEffect(() => {
    console.log(profile);
    setState({ ...state, ...profile });
  }, [profile]);

  useEffect(() => {
    if (!isOpen) {
      setState({
        id: "",
        email: "",
        name: "",
        rol: "",
        rut: "",
        password: "",
      });
    }
  }, [isOpen]);

  const [state, setState] = useState({
    id: "",
    email: "",
    name: "",
    rol: "",
    rut: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
    dispatch(StartEditProfile(jwt, state));
    handleOnClose();
  };

  return (
    <Modal open={isOpen} onClose={handleOnClose} sx={ModalStyle}>
      <Box sx={BoxPrincipal}>
        <Box sx={BoxContainer}>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ alignSelf: "flex-end" }}
            onClick={handleOnClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            sx={{ color: "#fff" }}
          >
            Editar Perfil
          </Typography>
          <form
            onSubmit={(ev) => handleOnSubmit(ev)}
            style={{
              alignSelf: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginY: "20px",
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                textAlign="center"
                sx={{ color: "#fff" }}
              >
                Nombre
              </Typography>
              <TextField
                required
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                name="name"
                value={state?.name}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginY: "20px",
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                textAlign="center"
                sx={{ color: "#fff" }}
              >
                Rut
              </Typography>
              <TextField
                required
                name="rut"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                label="Rut"
                variant="outlined"
                value={state?.rut}
                onChange={handleChange}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginY: "20px",
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                textAlign="center"
                sx={{ color: "#fff" }}
              >
                Contraseña
              </Typography>
              <TextField
                required
                name="password"
                sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={state?.password}
                onChange={handleChange}
              />
            </Box>
            <ButtonGroup
              sx={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                type="submit"
                sx={{ backgroundColor: "#fff", marginX: "10px" }}
                variant="outlined"
              >
                Guardar
              </Button>
              <Button
                sx={{ backgroundColor: "#fff", marginX: "10px" }}
                variant="outlined"
                onClick={handleOnClose}
              >
                Cancelar
              </Button>
            </ButtonGroup>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEditProfile;
