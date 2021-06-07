import React, {Component} from 'react'
import FeedbackService from '../services/feedbackService'
import { Link } from "react-router-dom";

class Feedback extends Component {
    state = { 
        feedbacks:[],
        feedback:{
            id:'',
            feedbackDate:'',
            description:'',
            rating:'',
            comments:'',
            users:0,
        }
     }


     componentDidMount() {
        FeedbackService.getAllFeedback().then((res) => {
          this.setState({ feedbacks: res.data });
        });
      }
      
      viewFeedback = () => {
        FeedbackService.viewFeedbackById(this.state.search).then((res) => {
          console.log("**data: ", res.data);
         this.setState({ feedback: res.data });
        // reader = res.data;
        });
        //this.setState({ reader:reader});
        console.log("** viewFeedback" + this.state.feedback);
      };
    
      onChange = (event) => {
        console.log(event.target.value);
        this.setState({ search: event.target.value });
      };
    
    
    
      render() {
        return (
          <div className="w-75 mt-5 mx-auto">
            <div className="d-flex justify-content-between">
              <Link to="/feedback/add" className="btn btn-secondary btn-large mb-1">
                Add
              </Link>
              <form class="form-inline my-2 my-lg-0">
                <input
                  className="form-control ml-auto"
                  type="search"
                  placeholder="Search by Id"
                  aria-label="Search"
                  onChange={this.onChange}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="button"
                  onClick={this.viewFeedback}
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
                      <th>Feedback_Date</th>
                      <th>Description</th>
                      <th>Rating</th>
                      <th>Comments</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.feedbacks.map((feedback) => (
                      <tr key={feedback.id}>
                        
                        <td>{feedback.feedbackDate}</td>
                        <td>{feedback.description}</td>
                        <td>{feedback.rating}</td>
                        <td>{feedback.comments}</td>
                        <td>
                          <Link to={`/feedback/update/${feedback.id}`}>
                            <button className="btn btn-secondary">Update</button>
                    </Link>
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
 
export default Feedback;