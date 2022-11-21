import axios from "axios"
import { useQuery } from "react-query"



 



const getCharacter = async ({queryKey}) =>{
const characterId = queryKey[1]
return await axios.get(`https://immense-shelf-01877.herokuapp.com/users/${characterId}`);
}

export const useCharacterDetails = (characterId) => {
  return useQuery(["characters",characterId],getCharacter,{
    onSuccess:()=>{
     return console.log("se cargaron de manera exitosa los charactes")
    },
    onError:()=>{
      return console.log("algo salio mal")
    },
    select:(response)=>{
      return response.data
    }
  })
}

