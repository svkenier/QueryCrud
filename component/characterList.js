import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Link from 'next/link';
import { useDeleteUser } from '../hook/useDeleteUser';
import TransitionsModal from './modal';
import { useState } from 'react';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export const CharacterList = ({ dataCharacters }) => {

  const { mutate } = useDeleteUser()

  const [open, setOpen] = useState(false);

  const [character, setCharacter] = useState({});
  
  const handleClose = () =>{
    setOpen(false)
    setCharacter({})
  };

  return (
    <>
      <Button  variant="text" color="primary" onClick={()=>setOpen(true)}>
        agregar usuario
      </Button>

      <TransitionsModal onClose={handleClose} open={open} character={character}  />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">id</StyledTableCell>
              <StyledTableCell align='center'>name</StyledTableCell>
              <StyledTableCell align="center">gender</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">user name</StyledTableCell>
              <StyledTableCell align="center">web site</StyledTableCell>
              <StyledTableCell align="center">acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataCharacters.map(({ id, name, email, city, username, website }) => (
              <StyledTableRow key={id}>
                <StyledTableCell align="center">{id}</StyledTableCell>
                <StyledTableCell align='center' component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell align="center">{city}</StyledTableCell>
                <StyledTableCell align="center">{email}</StyledTableCell>
                <StyledTableCell align="center">{username}</StyledTableCell>
                <StyledTableCell align="center">{website}</StyledTableCell>
                <StyledTableCell sx={{
                  display:"flex",
                  justifyContent:"space-evenly"
                }}>

                  <Link href={`/charactersUser/${id}`}>
                    <Button variant="outlined" color="primary"  >Detalles</Button>
                  </Link>
                  <Button variant="outlined" color="warning" onClick={()=>{
                    let foundCharacter = dataCharacters.find((item)=> item.id == id)

                    setCharacter(foundCharacter) 

                    setOpen(true)

                  }} >Editar</Button>
                  <Button variant="outlined" color="error" onClick={(e) => mutate(id)}>Eliminar</Button>

                </StyledTableCell>


              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}





