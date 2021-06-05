import React, { Component } from "react";
import usersService from "../services/usersService";


class AddUser extends Component{
    state={
        user:{
            userId:"",
            dateOfBirth:"",
            subscriptionDate:"",
            subExpireDate:"",
            subscriptionStatus:"",
        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        usersService.createUser(this.state.user).then((res)=>{
            this.props.history.push("");

        });
    };
    handleChange=(event)=>{
        const user={...this.state.user};
        user[event.currentTarget.name]=event.currentTarget.value;
        this.setState({user});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">
                            UserId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="userId"
                          name="userId"
                          value={this.state.user.userId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                       <label htmlFor="dateOfBirth" className="form-label">
                            DateOfBirth
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={this.state.user.dateOfBirth}
                          onChange={this.handleChange}
                        />
                       <label htmlFor="subscriptionDate" className="form-label">
                            Subscription Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="subscriptionDate"
                          name="subscirptionDate"
                          value={this.state.user.subscirptionDate}
                          onChange={this.handleChange}
                        /> 
                        <label htmlFor="subExpireDate" className="form-label">
                            SubExpire Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="subExpireDate"
                          name="subExpireDate"
                          value={this.state.user.subExpireDate}
                          onChange={this.handleChange}
                        />  
                       <label htmlFor="subscriptionStatus" className="form-label">
                            Subscription Status
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subscriptionStatus"
                          name="subscriptionStatus"
                          value={this.state.user.subscriptionStatus}
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

export default AddUser;