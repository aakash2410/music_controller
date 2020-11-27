import React, {Component} from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Room from './Room';

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<Router>
            <Switch>
                <Route exact path='/'><p>This is the Home Page</p></Route>
                <Route exact path='/join' component={RoomJoinPage}/>
                <Route path ='/room/:roomCode' component={Room}/>
                <Route exact path='/create' component={CreateRoomPage}/>
            </Switch>


        </Router>);
    }
}