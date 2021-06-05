import axios from "axios";

const LOCAL_HOST_URL = "http://localhost:8080/address";

class AddressService{
    async getAllAddresses(){
        return await axios.get(LOCAL_HOST_URL);
    }

    async createAddress(address){
        return await axios.post(LOCAL_HOST_URL,address);
    } 

    async getAddressById(addressId){
        return await axios.get(LOCAL_HOST_URL + "/id/"+addressId);
    }

    async updateAddress(addressId,address){
        return await axios.put(LOCAL_HOST_URL +"/"+ addressId,address);
    }
    
    async deleteAddress(addressId){
        return await axios.delete(LOCAL_HOST_URL + "/"+ addressId);
    }
}
export default new AddressService();