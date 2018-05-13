import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, withStyles, List, ListItem, Drawer } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu"

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {drawer:false}
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(){
        this.setState = {
            drawer: !this.state.drawer
        }
    }

    render() {
        const { classes } = this.props;
        const fullList = (
            <List>
                <ListItem>首页</ListItem>
            </List>
        )
        return (
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="title" align="left" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <IconButton className={classes.menuButton} onClick={this.toggleDrawer} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={this.state.drawer} onClose={this.toggleDrawer}>
                            <div
                                tabIndex={0}
                                role="right"
                                onClick={this.toggleDrawer}
                                onKeyDown={this.toggleDrawer}
                            >
                                {fullList}
                            </div>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);