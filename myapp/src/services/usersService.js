import axios from "axios";

const LOCAL_HOST_URL = "http://localhost:8080/user";

class UsersService{
    async getAllUsers(){
        return await axios.get(LOCAL_HOST_URL);
    }

    async createUser(user){
        return await axios.post(LOCAL_HOST_URL,user);
    } 

    async getUserById(userId){
        return await axios.get(LOCAL_HOST_URL + "/"+userId);
    }

    async updateUser(userId,user){
        return await axios.put(LOCAL_HOST_URL +"/"+ userId,user);
    }
    
    async deleteUser(userId){
        return await axios.delete(LOCAL_HOST_URL + "/"+ userId);
    }
}
export default new UsersService(); 