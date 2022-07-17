import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../Feature/Auth/Component/Register';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: "10px",
  },
  colorLink: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.CodeIcon}/>

          <Typography variant="h5" className={classes.title}>
            <Link to="/" className={classes.colorLink}> Todo </Link>
          </Typography>
          <NavLink to="/products" className={classes.colorLink}>
            <Button color="inherit">Product</Button>
          </NavLink>
          <NavLink to="/todos" className={classes.colorLink}>
            <Button color="inherit">Todo List</Button>
          </NavLink>
          <NavLink to="/login" className={classes.colorLink}>
            <Button color="inherit" onClick={handleClickOpen}>Login / Register</Button>
          </NavLink>

        </Toolbar>
      </AppBar>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <DialogContent>
          {/* Show form */}
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
