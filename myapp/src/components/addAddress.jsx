import React, { Component } from "react";
import AddressService from "../services/addressService";


class AddAddress extends Component{
    state={
        address:{
            addressIdId:"",
            address1:"",
            address2:"",
            city:"",
            state:"",
            pincode:"",
        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        AddressService.createAddress(this.state.address).then((res)=>{
            this.props.history.push("");

        });
    };
    handleChange=(event)=>{
        const address={...this.state.address};
        address[event.currentTarget.name]=event.currentTarget.value;
        this.setState({address});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="addressId" className="form-label">
                            AddressId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="addressId"
                          name="addressId"
                          value={this.state.address.addressId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                       <label htmlFor="address1" className="form-label">
                            Address1
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address1"
                          name="address1"
                          value={this.state.address.address1}
                          onChange={this.handleChange}
                        />
                       <label htmlFor="address2" className="form-label">
                            Address2
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          name="address2"
                          value={this.state.address.address2}
                          onChange={this.handleChange}
                        /> 
                        <label htmlFor="city" className="form-label">
                            City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          value={this.state.address.city}
                          onChange={this.handleChange}
                        />  
                       <label htmlFor="state" className="form-label">
                            State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          value={this.state.address.state}
                          onChange={this.handleChange}
                        />
                     
                       <label htmlFor="pincode" className="form-label">
                            Pincode
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          name="pincode"
                          value={this.state.address.pincode}
                          onChange={this.handleChange}
                        />
                    </div>  

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>     
                </form>
            </div>
        
        );
    }
}

export default AddAddress;