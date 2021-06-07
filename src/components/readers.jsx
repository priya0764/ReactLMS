import React, { Component } from "react";
import ReaderService from "../services/readerService";
import { Link } from "react-router-dom";
import _ from 'lodash';

class Readers extends Component {
  state = {
    readers: [],
    search: "",
    reader: {
      id: "",
      firstName: "",
      lastName: "",
      mobileNo: "",
      email: "",
    },
  };

  componentDidMount() {
    ReaderService.getAllReaders().then((res) => {
      this.setState({ readers: res.data });
    });
  }
  deleteReader = (id) => {
    console.log("Delete reader with id: " + id);
    const readers = this.state.readers.filter(
      (reader) => reader.id !== id
    );
    this.setState({ readers });
    ReaderService.deleteReaderById(id);
  };
  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  viewReader = () => {
   {/* ReaderService.getReaderById(this.state.search).then((res) => {
      console.log("**data: ", res.data);
     this.setState({ reader: res.data });
    // reader = res.data;
    });
    //this.setState({ reader:reader});
  console.log("** viewReader" + this.state.reader);*/}
 let readers=[];
  ReaderService.getReaderById(this.state.search).then((res)=>{
    readers=res.data;
  });
  this.setState({readers});
  };

 



  render() {
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/reader/add" className="btn btn-secondary btn-large mb-1">
            Add
          </Link>
          <form onSubmit={this.viewReader} class="form-inline my-2 my-lg-0">
            <input
              className="form-control ml-auto"
              type="search"
              placeholder="Search by Id"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Reader FirstName</th>
                  <th>Reader LastName</th>
                  <th>Reader MobileNo</th>
                  <th>Reader Email</th>
                  <th colspan='2'> Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.readers.map((reader) => (
                  <tr key={reader.id}>
                    
                    <td>{reader.firstName}</td>
                    <td>{reader.lastName}</td>
                    <td>{reader.mobileNo}</td>
                    <td>{reader.email}</td>
                    <td>
                      <Link to={`/reader/update/${reader.id}`}>
                        <button className="btn btn-secondary">Update</button>
                </Link>

                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => this.deleteReader(reader.id)}
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
      </div>
    );
  }
}

export default Readers;
