import { Modal, Typography } from "@mui/material"
import {CharacterList} from "../component/characterList"
import { useCharacters } from "../hook/useCharacters"

export default function Home() {

  

  const {data,isLoading, isError, error} = useCharacters()

  if ( isLoading ) {
    return <h1>loading</h1>
  }

  if (isError) {
    return <h1>{error}</h1>
  }

  return (
    <>
<Typography align="center" variant="h2" color="initial">Crud</Typography>
    
   
    <CharacterList dataCharacters={data} />
    
    </>
  )
}
