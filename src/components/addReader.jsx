import React,{Component} from 'react'
import ReaderService from '../services/readerService'


class AddReader extends Component{
    state={
        reader:{
            id:'',
            firstName:'',
            lastName:'',
            mobileNo:'',
            email:'',
            password:'',
        },
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
        ReaderService.register(this.state.reader).then((res) => {
          this.props.history.push("/reader");
        });
      };
      handleChange = (event) => {
        const reader = {...this.state.reader };
        // dynamically handling event changes
        reader[event.currentTarget.name] = event.currentTarget.value;
        this.setState({ reader });
      };
    render(){
        return(
            <div className='w-50 mx-auto'>
                <form onSubmit={this.handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='Id' className='form-label'>Id</label>
                        <input type='text' className='form-control' id='id' name='id' value={this.state.reader.id} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='FirstName' className='form-label'>First Name</label>
                        <input type='text' className='form-control' id='firstName' name='firstName' value={this.state.reader.firstName} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='LastName' className='form-label'>Last Name</label>
                        <input type='text' className='form-control' id='lastName' name='lastName' value={this.state.reader.lastName} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='MobileNo' className='form-label'>Mobile No</label>
                        <input type='text' className='form-control'id='mobileNo' name='mobileNo' value={this.state.reader.mobileNo} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input type='text' className='form-control' id='email' name='email' value={this.state.reader.email} onChange={this.handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Password' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='password' name='password' value={this.state.reader.password} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default AddReader