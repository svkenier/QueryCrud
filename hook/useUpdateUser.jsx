import { useQueryClient,useMutation } from "react-query";
import axios from "axios";

const updateUser = async (character) => {
    return await axios.put(`https://immense-shelf-01877.herokuapp.com/users/${character.id}`, character);
  };
  
  export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation(updateUser, {
      onSuccess: () => {
        queryClient.invalidateQueries("dataCharacters");
        return console.log("wass a exit from useDeleteUsers");
      },
      onError: () => {
        return console.log("that was error from useDeleteCharacter");
      },
    });
  };