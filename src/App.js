import Navbar from "./componets/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Fragment, Component } from "react";
import axios from "axios";
import Users from "./componets/User/Users";
import Search from "./componets/User/Search";
import Alert from "./componets/Navbar/Alert";
import About from "./componets/Pages/About";
import { Background } from "./componets/User/Background";

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: false });

  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({ users: res.data, loading: false });
  // };

  searchUser = async text => {
    console.log(text);
    this.setState({ loading: false });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({ users: res.data.items, loading: false });
  }

  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Routes>
          <Route path="/" element={(
            <Fragment>
              <div className="container">
                <Search searchUser={this.searchUser} clearUser={this.clearUser} showClear={this.state.users.length > 0} setAlert={this.setAlert} />
                <Users loading={this.state.loading} users={this.state.users} />
              
              </div>
            </Fragment>
          )} />
          <Route path='/about' element={(
            <div className="container mt-5">
              <About></About>
          </div>
          )} />
        </Routes>
      </Router>
    );
  }
}

export default App;