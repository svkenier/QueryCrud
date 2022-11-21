import { useCharacterDetails } from "../../../hook/useCharacterDetails"
import { useRouter } from "next/router"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box} from "@mui/system";
import Link from "next/link";


  const CharacterDetails = ()=>
  {
    const router = useRouter()
 
    const {characterId} = router.query
    const { data, isLoading } = useCharacterDetails(characterId);
   console.log("esta es la data",data)
    if (isLoading) {
      return <h1>loading</h1>
    }

    const {name,city,username,website,id,email} = data 

    return(

    <>
  <Box sx={{
    width:"100%",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}>


    <Card sx={{ 
      bgcolor:"#555",
      width:"50%",
      height:"60%",
      textAlign:"center"

     }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" color="#fff" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="#fff">
        <Box ><Typography variant="h6" color="initial">id:</Typography></Box>
        <Box>{id}</Box>

        <Box ><Typography variant="h6" color="initial">user name:</Typography></Box>
        <Box>{username}</Box>

        <Box ><Typography variant="h6" color="initial">gender:</Typography></Box>
        <Box>{city}</Box>

        <Box ><Typography variant="h6" color="initial">email:</Typography></Box>
          <Box>{email}</Box>

        <Box ><Typography variant="h6" color="initial">web site:</Typography></Box>
          <Box>{website}</Box>
        </Typography>
          
          
          
      </CardContent>
      <CardActions sx={{
        display:"flex",
        justifyContent:"center"
        }}>
        <Link href={"/"}>
        <Button size="large"sx={{width:"80%",textAlign:"center"}} >Back</Button>
        </Link>
      </CardActions>
    </Card>

  </Box>
 
    </>
  )
  }
  
export default CharacterDetails
 

