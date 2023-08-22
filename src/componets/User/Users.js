import User from "./User";
import React, {Component} from "react";

class Users extends Component {
    // const props = [{
    //     id: '1',
    //     login: 'mojombo',
    //     avtar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    //     html_url: 'https://github.com/mojombo',
    // },
    // {
    //     id: '2',
    //     login: 'defunkt',
    //     avtar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
    //     html_url: 'https://github.com/defunkt',
    // },
    // {
    //     id: '3',
    //     login: 'pjhyett',
    //     avtar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
    //     html_url: 'https://github.com/pjhyett',
    // },
    // ];
    render(){
    return (
        <div className='grids'>
            {/* <User id={props[0].id} login={props[0].login} avtar_url={props[0].avtar_url} html_url={props[0].html_url}></User>
            <User id={props[1].id} login={props[1].login} avtar_url={props[1].avtar_url} html_url={props[1].html_url}></User>
            <User id={props[2].id} login={props[2].login} avtar_url={props[2].avtar_url} html_url={props[2].html_url}></User> */}
             {this.props.users.map(user=>(
                <User key={user.id} user={user}></User>
            ))
            }
            <div></div>
        </div>
    );
        }
}

export default Users;
