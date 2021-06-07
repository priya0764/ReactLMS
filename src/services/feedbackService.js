import axios from 'axios'

const FEEDBACK_API_BASE_URL="http://localhost:8080/feedback"

class FeedbackService{
    async getAllFeedback(){
        return await axios.get(FEEDBACK_API_BASE_URL)
    }
    async writeFeedback(userId,feedback){
        return await axios.post(FEEDBACK_API_BASE_URL+"/"+userId,feedback)
    }
    async updateFeedback(userId,feedback){
        return await axios.put(FEEDBACK_API_BASE_URL+"/"+userId,feedback)
    }
    async viewFeedbackById(id){
        return await axios.get(FEEDBACK_API_BASE_URL +"/"+id)
    }
    async viewFeedbackByUser(userId){
        return await axios.get(FEEDBACK_API_BASE_URL+"/user/"+userId)
    }
}
export default new FeedbackService();