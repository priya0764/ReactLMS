import React,{Component} from 'react'
import FeedbackService from '../services/feedbackService'


class AddFeedback extends Component{
    state = {
        feedback: {
          id: "",
          feedbackDate: "",
          description: "",
          rating: "",
          comments: "",
          users:[],
        },
      };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        FeedbackService.writeFeedback(this.state.users.userId, this.state.feedback).then((res) => {
          this.props.history.push("/feedback");
        });
      };
      handleChange = (event) => {
        const feedback = {...this.state.feedback };
        // dynamically handling event changes
        feedback[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ feedback });
      };
    render(){
        return(
            <div className='w-50 mx-auto'>
                <form onSubmit={this.handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='user_id' className='form-label'>UserId</label>
                        <input type='text' className='form-control' id='users' name='users' value={this.state.feedback.users} onChange={this.handleChange} />
        </div>
                    <div className='mb-3'>
                        <label htmlFor='FeedbackDate' className='form-label'>Feedback_Date</label>
                        <input type='text' className='form-control' id='feedbackDate' name='feedbackDate' value={this.state.feedback.feedbackDate} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Description' className='form-label'>Description</label>
                        <input type='text' className='form-control' id='description' name='description' value={this.state.feedback.description} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Rating' className='form-label'>Rating</label>
                        <input type='text' className='form-control'id='rating' name='rating' value={this.state.feedback.rating} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='comments' className='form-label'>Comments</label>
                        <input type='text' className='form-control' id='comments' name='comments' value={this.state.feedback.comments} onChange={this.handleChange} />
                    </div>
                    

                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default AddFeedback