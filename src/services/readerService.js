import axios from 'axios';

const READER_API_BASE_URL ="http://localhost:8080/reader"

class ReaderService{
    async getAllReaders(){
        return await axios.get(READER_API_BASE_URL);
    }
    async register(reader){
        return await axios.post(READER_API_BASE_URL, reader)
    }
    async getReaderById(readerId){
        return await axios.get(READER_API_BASE_URL + "/get/"+ readerId);
    }

    async updateReader(readerId, reader){
        return await axios.put(READER_API_BASE_URL+"/" +readerId, reader);
    }

    async deleteReaderById(readerId){
        return await axios.delete(READER_API_BASE_URL+"/"+readerId);
    }


    
}
export default new ReaderService();