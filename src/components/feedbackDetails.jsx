import React, { Component } from "react";
import FeedbackService from '../services/feedbackService'

class FeedbackDetails extends Component {
  state = {
    feedback: {
      id: "",
      feedbackDate: "",
      description: "",
      rating: "",
      comments: "",
    },
  };
  componentDidMount(){
      FeedbackService.viewFeedbackById(this.props.match.params.id).then((res)=>
      this.setState({feedback:res.data})
      );
  }
  handleChange=(event)=>{
      event.preventDefault();
      const feedback=this.state.feedback;
      feedback[event.currentTarget.name]=event.currentTarget.value;
      this.setState({feedback});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.feedback);
    FeedbackService.updateFeedback(this.props.match.params.id,this.state.feedback).then((res) => {
      this.props.history.push("/feedback");
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='w-75 mx-auto'>
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Feedback_Date
            </label>
            <input
              type="text"
              className="form-control"
              id="feedbackDate"
              name="feedbackDate"
              value={this.state.feedback.feedbackDate}
              onChange={this.handleChange}
            />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={this.state.feedback.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                Rating
              </label>
              <input
                type="text"
                className="form-control"
                id="rating"
                name="rating"
                value={this.state.feedback.rating}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Comments
              </label>
              <input
                type="text"
                className="form-control"
                id="comments"
                name="comments"
                value={this.state.feedback.comments}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Save
            </button>
            <button
              className="btn btn-secondary mr-2 float-right"
              onClick={() => {
                this.props.history.push("/feedback");
              }}
            >
              Cancel
            </button>
        </form>
      </div>
    );
  }
}
export default FeedbackDetails
