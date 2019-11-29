import React from 'react';
import clsx from 'clsx';
import Despesas from '../../public/img/wallet.png';
import '../financeiro/style.css';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Responsavel from '../responsavel/tabelaResponsavel';
import tiovanTextLogo from '../home/modules/media/tiovan_LOGO_TEXT.svg';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    typography: {
        flexGrow: 1,
        align: "center",
        fontWeight: 300
    }

}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ backgroundColor: '#FECB3D' }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Link to="/motorista/portal">
                        <Typography align="center" variant="h3" className={classes.typography} noWrap>
                            <img
                                style={{ display: "block" }}
                                src={tiovanTextLogo}
                                alt="increase priority"
                            />
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
          <Link to="/motorista/rotas">
            <ListItem button key="Rotas" component="a" >
              <ListItemIcon >
                <AddLocationIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Rotas" />
            </ListItem>
          </Link>
          <Link to="/motorista/financeiro">
            <ListItem button key="Financeiro" component="a">
              <ListItemIcon><AttachMoneyIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Financeiro" />
            </ListItem>
          </Link>
          <Link to="/motorista/portal">
            <ListItem button key="Gestão" component="a">
              <ListItemIcon><AssignmentIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Gestão" />
            </ListItem>
            </Link>
          <hr />
          <Link to="/">
            <ListItem button key="Sair" component="a" to="/">
              <ListItemIcon><HighlightOffIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
            </Link>
        </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <center>
                <iframe width="1240" height="600" src="https://app.powerbi.com/reportEmbed?reportId=4f51a92a-c51b-4f59-a634-24fac5540c3b&autoAuth=true&ctid=2e3290cb-8d40-4058-abe5-02c4f58b87e3&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
                </center>
            </main>
        </div>
    );
} 
