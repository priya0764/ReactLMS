import React, {Component}from 'react'

class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            Email:'',
            Password:''

        }
    }
  
       onClickHandler(){
           alert(`logged in successfully`)
          
       }
       handleEmailChange=(event)=>{
           this.setState({
               Email:event.traget.value
           })

       }
       handlePasswordChange=(event)=>{
           this.setState({
               Password:event.target.value
           })
       }
    
    render(){
        const {Email, Password}=this.state
        return(
           
            <form>
            <div> 
                
                <div className='mt-5'>
                <label>Email</label>
                <input type='text' placeholder='Email' required value={Email} onChange={this.handleEmailChange}/>
                </div>
                <div className='mt-2'>
                <label>Password</label>
                <input type='password' placeholder='Password' required value={Password} onChange={this.handlePasswordChange}/>
                </div>
                <button className='mt-2' onClick={this.onClickHandler}>Submit</button>

            </div>
            </form>
        )
    }
}

export default Login