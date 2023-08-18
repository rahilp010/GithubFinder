import Navbar from "./componets/Navbar/Navbar";
import User from "./componets/User/User";
import React, { Component } from "react";
import axios from "axios";
import Users from "./componets/User/Users";
import Search from "./componets/User/Search";

class App extends Component {

  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: false });

  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({ users: res.data.items, loading: false });
  // };

  searchUser=async text =>{
    console.log(text);
    this.setState({ loading: false });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({ users: res.data.items, loading: false });
  }

  clearUser=() => {
    this.setState({ users:[] , loading: false });
  };

  render() {
    return (
      <div>
        <Navbar></Navbar>
        {/* <User></User> */}
        <div className="container">
          <Search searchUser={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length >0 ? true:false}/>
          <Users loading={this.state.loading} users={this.state.users} />

        </div>
      </div>
    );
  }
}

export default App;
