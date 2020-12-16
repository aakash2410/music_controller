import React, {Component} from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {Grid, Button, ButtonGroup, Typography} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Room from './Room';

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            roomCode: null,
        };
    }

    async componentDidMount(){
        fetch('/api/user-in-room')
        .then((response) => response.json())
        .then((data)=>{
            this.setState({
                roomCode: data.code
            });
        });
    }


    renderHomePage(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12} align = "center">
                    <Typography variant = "h3" compact ="h3">
                        Spotify Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align = "center">
                    <ButtonGroup  variant="contained" color="primary">
                        <Button color = "primary" to='/join' component = {Link}>
                            Join a Room
                        </Button>
                        <Button color = "secondary" to='/create' component = {Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>

        );

    }
    render(){
        return (<Router>
            <Switch>
                <Route exact path='/' render={()=>{
                    return this.state.roomCode ? (<Redirect to={`/room/${this.state.roomCode}`}/>)
                    : this.renderHomePage()
                }}/>
                <Route exact path='/join' component={RoomJoinPage}/>
                <Route 
                    path ='/room/:roomCode'
                    render={(props)=>{
                        return <Room {...props} leaveRoomCallback={this.clearRoomCode}/>;
                    }}/>
                <Route exact path='/create' component={CreateRoomPage}/>
            </Switch>
        </Router>);
    }
}