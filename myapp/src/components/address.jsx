import React, { Component } from "react";
import _ from "lodash";
import AddressService from "../services/addressService";
import {Link} from "react-router-dom";

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortColumn:{path:"title",order:"asc"},
      search:"",
      addressList: [],
    };
  }
  componentDidMount() {
    AddressService.getAllAddresses().then((res) => {
      console.log("data: ", res.data);
      this.setState({ addressList: res.data });
    });
    console.log("addressDetails: "+ this.state.addressList);
  }

  deleteAddress=(id)=>{
    console.log("Delete address with id: " + id);
    const addressList=this.state.addressList.filter(
    (address)=>address.addressId !==id
    );
    this.setState({ addressList });
    AddressService.deleteAddress(id);
  
  };
  viewAddress=()=>{
    let addressList=[];
    AddressService.getAddressById(this.state.serach).then((res)=>{
      console.log("**data: ", res.data);
      addressList=res.data;
    });
    this.setState({ addressList });
    console.log("**viewAddress"+this.state.addressList);
  };
    handleSort=(path)=>{
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc"}});
  };

  onChange=(event)=>{
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, addressList }=this.state;
    var sorted=[];
    if(search){
      sorted=addressList.filter((address)=>address.addressId==search);
    }else{
      sorted=_.orderBy(
        this.state.addressList,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.addressList);
    console.log("Sorted..",sorted);
    return (
      <div>
        <h2 className="text-center">Address List</h2>
        <div className="w-75 mt-5 mx-auto">
         <div className="d-flex justify-content-between">
           <Link to="/address/add" className="btn btn-success btn-large mb-1">
             Add
           </Link>
           <form class="form-inline my-2 my-lg-0">
             <input
              classNAme="form-control ml-auto"
              type="search"
              placeholder="search by Id"
              aria-label="search"
              onChange={this.onChange}
             />
             <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewAddress} 
             >
               Search
            </button> 
           </form>
         </div>
        </div>
        <div className="row">
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                
                <th onClick={()=>this.handleSort("address1")}>Address1</th>
                <th onClick={()=>this.handleSort("address2")}>Address2</th>
                <th onClick={()=>this.handleSort("city")}>City</th>
                <th onClick={()=>this.handleSort("state")}>State</th>
                <th onClick={()=>this.handleSort("pincode")}>Pincode</th>
                <th colSpan="2">Action</th>
             </tr>
            </thead>
            <tbody>
              {sorted.map((address) => (
                <tr key={address.addressId}>
                  <td>{address.address1}</td>
                  <td>{address.address2}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>{address.pincode}</td>
                  <td>
                     <Link to={`/address/update/${address.addressId}`}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>

                    <button
                     className="btn btn-danger ml-2"
                     onClick={()=> this.deleteAddress(address.addressId)}
                     > 
                       Delete
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Address;