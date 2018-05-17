import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, List, ListItem, Drawer, Button, TextField, Grid, InputAdornment, withWidth, Hidden } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import compose from "recompose/compose"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    margin: {
        margin: theme.spacing.unit
    }
})

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { drawer: false }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = (open) => () => {
        console.log(this.state)
        this.setState({
            drawer: open
        })
    }

    render() {
        const { classes } = this.props;
        const fullList = (
            <List>
                <ListItem><Button>首页</Button></ListItem>
                <ListItem><Button>分享</Button></ListItem>
                <ListItem><Button>笔记</Button></ListItem>
                <ListItem><Button>个人简历</Button></ListItem>
            </List>
        )
        return (
            <div className={classes.root}>
                <AppBar color="inherit" position="static" >
                    <Toolbar>
                        <Typography variant="title" align="left" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Hidden smDown>
                        <Grid>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        </Hidden>
                        <IconButton onClick={this.toggleDrawer(true)} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={this.state.drawer} onClose={this.toggleDrawer(false)}>
                            <div
                                tabIndex={0}
                                onClick={this.toggleDrawer(false)}
                                onKeyDown={this.toggleDrawer(false)}
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

export default compose(withStyles(styles), withWidth())(Header);