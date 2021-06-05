import React, { Component } from "react";
import _ from "lodash";
import BooksIssuedService from "../services/booksIssuedService";
import {Link} from "react-router-dom";

class BooksIssued extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortColumn:{path:"title",order:"asc"},
      search:"",
      booksIssuedList: [],
    };
  }
  componentDidMount() {
    BooksIssuedService.getAllBooksIssued().then((res) => {
      console.log("data: ", res.data);
      this.setState({ booksIssuedList: res.data });
    });
    console.log("booksIssuedDetails: "+ this.state.booksIssuedList);
  }

  deleteBooksIssued=(id)=>{
    console.log("Delete Book with id: " + id);
    const booksIssuedList=this.state.booksIssuedList.filter(
    (booksIssued)=>booksIssued.issueId !==id
    );
    this.setState({ booksIssuedList });
    BooksIssuedService.deleteBookById(id);
  
  };
  viewBooksIssued=()=>{
    let booksIssuedList=[];
    BooksIssuedService.getById(this.state.serach).then((res)=>{
      console.log("**data: ", res.data);
      booksIssuedList=res.data;
    });
    this.setState({ booksIssuedList });
    console.log("**viewBooksIssued"+this.state.booksIssuedList);
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
    const { search, sortColumn, booksIssuedList }=this.state;
    var sorted=[];
    if(search){
      sorted=booksIssuedList.filter((booksIssued)=>booksIssued.issueId==search);
    }else{
      sorted=_.orderBy(
        this.state.booksIssuedList,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.booksIssuedList);
    console.log("Sorted..",sorted);
    return (
      <div>
        <h2 className="text-center">BooksIssued List</h2>
        <div className="w-75 mt-5 mx-auto">
         <div className="d-flex justify-content-between">
           <Link to="/booksIssued/add" className="btn btn-success btn-large mb-1">
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
              onClick={this.viewBooksIssued} 
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
                
                <th onClick={()=>this.handleSort("issueDate")}>IssueDate</th>
                <th onClick={()=>this.handleSort("quantity")}>Quantity</th>
                <th onClick={()=>this.handleSort("dueDate")}>Due Date</th>
                <th colSpan="2">Action</th>
             </tr>
            </thead>
            <tbody>
              {sorted.map((booksIssued) => (
                <tr key={booksIssued.issueId}>
                  <td>{booksIssued.issueDate}</td>
                  <td>{booksIssued.quantity}</td>
                  <td>{booksIssued.dueDate}</td>
                  <td>
                     <Link to={`/booksIssued/update/${booksIssued.issueId}`}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>

                    <button
                     className="btn btn-danger ml-2"
                     onClick={()=> this.deleteBooksIssued(booksIssued.issueId)}
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

export default BooksIssued;