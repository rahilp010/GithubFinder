import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Please enter Something','danger');
        }
        else{
            this.props.searchUser(this.state.text);
            this.setState({ text: '' });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className='mt-2'>
                <form className="d-flex" onSubmit={this.onSubmit}>
                    <input className="form-control me-2 fw-2 border-2" name='text' type="search" placeholder="Search The Data...." value={this.state.text} onChange={this.onChange} />
                    <button className="btn btn-dark fw-bold" type="submit">Search</button>
                </form>
                {this.props.showClear &&
                    <button className="btn btn-danger fw-bold w-100 mt-2" onClick={this.props.clearUser}>Clear Search</button>}

            </div>
        )
    }
}

export default Search;
