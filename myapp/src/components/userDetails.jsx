import React, { Component }from "react";
import UsersService from "../services/usersService";

class UserDetails extends Component{
    state = {
        userList: {
            userId:"",
            dateOfBirth:"",
            subscriptionDate:"",
            subExpireDate:"",
            subscriptionStatus:"",
        },
     };
    componentDidMount(){
        UsersService.getUserById(this.props.match.params.id).then((res)=>
         this.setState({user:res.data})
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const userList=this.state.userList;
        userList[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ userList });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.userList);
        UsersService.updateUser(
            this.props.match.params.id,
            this.state.user
            
        ).then((res)=>{
            this.props.history.push("/users");
        });
    };
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.id}</h1>
                  <div className="mb-3">
                      <label htmlFor="userId" className="form-label">
                          UserId
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="userId"
                        name="userId"
                        value={this.state.userList.userId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="dateOfBirth" className="form-label">
                          DateOfBirth
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={this.state.userList.dateOfBirth}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="subscriptionDate" className="form-label">
                          Subscription Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subscriptionDate"
                        name="subscriptionDate"
                        value={this.state.userList.subscriptionDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="subExpireDate" className="form-label">
                          SubExpire Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subExpireDate"
                        name="subExpireDate"
                        value={this.state.userList.subExpireDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="subscriptionStatus" className="form-label">
                          Subscription Status
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subscriptionStatus"
                        name="subscriptionStatus"
                        value={this.state.userList.subscriptionStatus}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button 
                  type="submit" 
                  className="btn btn-primary float-right"
                  onClick={()=>{
                      this.props.history.push("/users");}
                  }
                  >
                  save
                  
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/users");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default UserDetails;

