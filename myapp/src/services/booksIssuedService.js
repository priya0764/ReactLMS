import axios from "axios";

const LOCAL_HOST_URL = "http://localhost:8080/issued";

class BooksIssuedService{
    async getAllBooksIssued(){
        return await axios.get(LOCAL_HOST_URL);
    }

    async createBooks(issued){
        return await axios.post(LOCAL_HOST_URL,issued);
    } 

    async getById(issueId){
        return await axios.get(LOCAL_HOST_URL + "/id/"+issueId);
    }

    async updateBooks(issueId,issued){
        return await axios.put(LOCAL_HOST_URL +"/"+ issueId,issued);
    }
    
    async deleteBookById(issueId){
        return await axios.delete(LOCAL_HOST_URL + "/"+ issueId);
    }
}
export default new BooksIssuedService();