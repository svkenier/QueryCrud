
import axios from "axios"
import { useMutation, useQueryClient } from "react-query"





const createUser  = (dataUser) => {

    axios.post("https://immense-shelf-01877.herokuapp.com/users", dataUser)

}

export  const useCreateUser = () =>{
    const queryClient = useQueryClient()
    
    return useMutation(createUser, {
        onSuccess:()=>{
            queryClient.invalidateQueries("dataCharacters")
            return console.log("wass a exit from useCreateUser")   
        },

        onError:()=>{
           return console.log("that was error from useDeleteCharacter")
        }
        
    })


}

export const updateUser  = (data) => {}
export const deleteUser  = (id) => {}
