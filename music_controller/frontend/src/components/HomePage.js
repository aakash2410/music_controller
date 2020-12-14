import React, {Component} from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import {Grid, Button, ButtonGroup, Typography} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Room from './Room';

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    async componentDidMount(){
        
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
                <Route exact path='/'>
                    {this.renderHomePage()}
                </Route>
                <Route exact path='/join' component={RoomJoinPage}/>
                <Route path ='/room/:roomCode' component={Room}/>
                <Route exact path='/create' component={CreateRoomPage}/>
            </Switch>


        </Router>);
    }
}