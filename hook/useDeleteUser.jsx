import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

const deleteUser = (characterId) => {
  return  axios.delete(`https://immense-shelf-01877.herokuapp.com/users/${characterId}`)
   
}



export const useDeleteUser = () => {
    const queryClient = useQueryClient()
  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("dataCharacters");
      return console.log("wass a exit from useDeleteUser");
    },
    onError: () => {
      return console.log("that was error from useDeleteUser");
    },
})
}
