import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {Link} from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class RoomJoinPage extends Component{
    defaultVotes = 2;

    constructor(props){
        super(props);
        this.state ={
            roomCode:"",
            error:""
        };
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._roomButtonPressed = this._roomButtonPressed.bind(this);
    }

    render(){
        return (
            <Grid container spacing={1} >
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                    error={this.state.error}
                    label="code"
                    placeholder="Enter a room code"
                    value={this.state.roomCode}
                    helperText={this.state.error}
                    variant="outlined"
                    onChange = {this._handleTextFieldChange}
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant = "contained" color = "primary" onClick = {this._roomButtonPressed}>
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant = "contained" color = "secondary" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }

    _handleTextFieldChange(e){
        this.setState({
            roomCode: e.target.value
        });
    }
    _roomButtonPressed(){
        const requestOptions={
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code:this.state.roomCode
            })
        };
        fetch('/api/join-room', requestOptions).then((response)=>{
            if (response.ok){
                this.props.history.push(`/room/${this.state.roomCode}`);
            }
            else{
                this.setState({error:"Room not found. "});
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}