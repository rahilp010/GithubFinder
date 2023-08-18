import React, {Component} from 'react';
import '../User/User.css';

class User extends Component {
    render(){
        const {login,avatar_url,html_url} = this.props.user;
    return (
      <div className='card'>
        <img src={avatar_url} className='image'/>
        <h5 className='fw-medium mt-2 fs-6'>{login}</h5>
        <div>
            <a className="btn btn-dark btn-sm mt-3 fw-medium" href={html_url} role="button" target='_blank'>About</a>
        </div>
      </div>
    )
  }
}

export default User;
