import React from 'react';
import clsx from 'clsx';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { fontWeight } from '@material-ui/system';
import Responsavel from '../responsavel/tabelaResponsavel';

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


export default function Portal() {
  return (
    <div>
      <div>
        <AppBarPortal />
      </div>

      <SideNav style={{ zIndex: "999999" }}

        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <a href="/motorista/financeiro/despesas">kapa</a>
            </NavIcon>
            <NavText>
              <a href="/motorista/financeiro/despesas">kapa</a>
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>
                Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>
                Bar Chart
                </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>

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
            <Typography align="center" variant="h3" className={classes.typography} noWrap>
              Tio<span style={{ color: '#000' }}>Van</span>
            </Typography>
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
            <ListItem button key="Rotas" component="a" href="/">
              <ListItemIcon >
                <AddLocationIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Rotas" />
            </ListItem>
            <ListItem button key="Financeiro" component="a" href="/">
              <ListItemIcon><AttachMoneyIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Financeiro" />
            </ListItem>
            <ListItem button key="Gestão" component="a" href="/">
              <ListItemIcon><AssignmentIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Gestão" />
            </ListItem>
            <hr />
            <ListItem button key="Sair" component="a" href="/">
              <ListItemIcon><HighlightOffIcon fontSize="large" /></ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Responsavel />

        </main>
      </div>
      );
}