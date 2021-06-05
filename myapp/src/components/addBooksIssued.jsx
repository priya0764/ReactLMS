import React, { Component } from "react";
import BooksIssuedService from "../services/booksIssuedService";


class AddBooksIssued extends Component{
    state={
        booksIssued:{
            issueId:"",
            issueDate:"",
            quantity:"",
            dueDate:"",
        
        },
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        BooksIssuedService.createBooks(this.state.booksIssued).then((res)=>{
            this.props.history.push("");

        });
    };
    handleChange=(event)=>{
        const booksIssued={...this.state.booksIssued};
        booksIssued[event.currentTarget.name]=event.currentTarget.value;
        this.setState({booksIssued});
    };
    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="issueId" className="form-label">
                            IssueId
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="issueId"
                          name="issueId"
                          value={this.state.booksIssued.issueId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                       <label htmlFor="issueDate" className="form-label">
                            IssueDate
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="issueDate"
                          name="issueDate"
                          value={this.state.booksIssued.issueDate}
                          onChange={this.handleChange}
                        />
                       <label htmlFor="quantity" className="form-label">
                            Quantity
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="quantity"
                          name="quantity"
                          value={this.state.booksIssued.quantity}
                          onChange={this.handleChange}
                        /> 
                        <label htmlFor="dueDate" className="form-label">
                            Due Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dueDate"
                          name="dueDate"
                          value={this.state.booksIssued.dueDate}
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

export default AddBooksIssued;