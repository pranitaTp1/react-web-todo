import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
root:{
    flexGrow:1,
}

}));
const DenseBar = () => {
    const classes = useStyles();
 return (
    <div className={classes.root}>
        <AppBar position="static" color="inherit">
            <Toolbar variant="dense">
                <Typography variant="h5" color="primary">
                    My Tasks
                </Typography>
            </Toolbar>
        </AppBar>
    </div>

 )
};
export default DenseBar;