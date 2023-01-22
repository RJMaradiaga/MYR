import React, { Component } from "react";
import {
    Button,
    ButtonBase,
    Icon,
    Tooltip,
    Popover,
} from "@material-ui/core";
//import myr from "../../myr/Myr.js";

// should update on saves

class Inspector extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            anchorEl: null
        };
    }

    /**
     * Update the state when the button is clicked
     * 
     * @param {object} event target to anchor the window
     */
    handleClick = (event) =>{
        this.setState({
            open: true,
            anchorEl: event.target});
    };

    inspectHelper = () => {
        return (
            <p> 
                put cursor information here.
            </p>
        );
    }

    /**
     * Update the state when the window is closed
     * 
     * @param {object} event target to anchor the window
     */
    handleClose = () => {
        this.setState({
            open: false,
            anchorEl: null});
    };

    render() {
        return(
            <div className="whole-keyboard"
                spacing={10}>
                <Tooltip title="Keyboard Shortcut">
                    <Button 
                        className="shortcut-button"
                        variant="contained"
                        size="small"
                        color="primary" 
                        onClick={this.handleClick}>
                        <Icon className="material-icons">search</Icon>
                    </Button>
                </Tooltip>
                <Popover
                    id="simple-popover"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                        vertical:"top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        hotizontal: "left"
                    }}
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <div className="keyboard-shortcut">
                        <ButtonBase
                            style={{ position: "absolute", right: 15, top: 15 }}
                            onClick={this.handleClose} >
                            <Icon className="material-icons">clear</Icon>
                        </ButtonBase >
                        <div className="right">
                            <this.inspectHelper></this.inspectHelper>
                        </div>
                    </div>
                </Popover> 
            </div>
        );
    }
}

export default Inspector;