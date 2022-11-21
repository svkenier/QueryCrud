import { useState } from "react";
import Typography from "@mui/material/Typography";
import { FormControl, TextField, Button } from "@mui/material";
import { useCreateUser } from "../hook/useCreateUser";
import { useUpdateUser } from "../hook/useUpdateUser";
import { Box } from "@mui/system";

const CheracterForm = ({ onClose, character }) => {
  const { mutate } = useCreateUser();

  const { mutate: mutateUpdate } = useUpdateUser();

  const [user, setUser] = useState({
    id: character?.id,
    name: character?.name,
    email: character?.email,
    city: character?.city,
    username: character?.username,
    website: character?.website,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (character?.name) {
      console.log("entrando al update")
      mutateUpdate(user);

      onClose(false)

    } else {
     console.log("entrando al create")
      mutate(user);

      setUser({
        name: "",
        email: "",
        city: "",
        username: "",
        website: "",
      });
      
      onClose(false)
    }

   
  };

  return (
    <>

    <Box sx={{width:"100%",display:"flex",justifyContent:"right"}}>

      <Button sx={{
        height:"30px",
        width:"5px",
        
      }}  variant="contained" color="error" onClick={onClose}>x</Button>
      </Box>    

      <Typography variant="h3" color="initial">
        agregar
      </Typography>
      <form>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop:"20px",
            alignItems: "center",
            gap:"10px"
          }}
        >
          <TextField
            name="name"
            label="nombre"
            variant="standard"
            onChange={handleChange}
            value={user.name}
            sx={{ width: "80%" }}
          />
          <TextField
            name="email"
            label="email"
            variant="standard"
            onChange={handleChange}
            value={user.email}
            sx={{ width: "80%" }}
          />
          <TextField
            name="gender"
            label="gender"
            variant="standard"
            onChange={handleChange}
            value={user.city}
            sx={{ width: "80%" }}
          />
          <TextField
            name="username"
            label="user name"
            variant="standard"
            onChange={handleChange}
            value={user.username}
            sx={{ width: "80%" }}
          />
          <TextField
            name="website"
            label="web site"
            variant="standard"
            onChange={handleChange}
            value={user.website}
            sx={{ width: "80%" }}
          />

          <Button
          sx={{marginTop:"25px",width:"80%"}}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            enviar
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default CheracterForm;
