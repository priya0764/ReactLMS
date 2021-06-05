import React, { Component }from "react";
import BooksIssuedService from "../services/booksIssuedService";

class BooksIssuedDetails extends Component{
    state = {
        booksIssuedList: {
            issueId:"",
            issueDate:"",
            quantity:"",
            dueDate:"",
        
        },
     };
    componentDidMount(){
        BooksIssuedService.getById(this.props.match.params.id).then((res)=>
         this.setState({booksIssued:res.data})
        ); 
    } 

    handleChange=(event)=>{
        event.preventDefault();
        const booksIssuedList=this.state.userList;
        booksIssuedList[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ booksIssuedList });
    };

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.userList);
        BooksIssuedService.updateBooks(
            this.props.match.params.id,
            this.state.booksIssued
            
        ).then((res)=>{
            this.props.history.push("/booksIssued");
        });
    };
    render(){
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.id}</h1>
                  <div className="mb-3">
                      <label htmlFor="issueId" className="form-label">
                          IssueId
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="issueId"
                        name="issueId"
                        value={this.state.booksIssueList.issueId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="issueDate" className="form-label">
                          IssueDate
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="issueDate"
                        name="issueDate"
                        value={this.state.booksIssuedList.issueDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="quantity" className="form-label">
                          Quantity
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={this.state.booksIssuedList.quantity}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="dueDate" className="form-label">
                          Due Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dueDate"
                        name="dueDate"
                        value={this.state.booksIssuedList.dueDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                      Save
                  </button>
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/booksIssued");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default BooksIssuedDetails;

