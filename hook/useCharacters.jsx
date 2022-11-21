import axios from "axios"
import { useQuery } from "react-query"



const getCharacter = async () =>{
    return await axios.get("https://immense-shelf-01877.herokuapp.com/users")
}
export const useCharacters = () => {


  return useQuery("dataCharacters",getCharacter,{
    select:(response)=>response.data
  })
}



