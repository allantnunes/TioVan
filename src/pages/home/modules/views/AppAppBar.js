import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
const backgroundImage = "https://svgur.com/i/G2Q.svg";
const styles = theme => ({
  logoTexto: {
    backgroundImage: `url:(${""})`
  },
  testeNoLink: {
    textDecoration: "overline",
    "&:hover": {
      color: "white",
      textDecoration: "none"
    }
  },
  title: {
    fontSize: 24
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  // leftLinkActive: {
  //   color: theme.palette.common.red
  // },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 20,
    "&:hover": {
      color: "white",
      textDecoration: "none"
    },
    textDecoration: "none",
    color: theme.palette.common.red,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    textDecoration: "none",
    color: theme.palette.secondary.main
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/premium-themes/onepirate/"
          >
            {
              <img
                style={{ display: "block" }}
                src={backgroundImage}
                alt="increase priority"
              />
            }
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(
                classes.rightLink,
                classes.linkSecondary,
                classes.testeNoLink
              )}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Sign Up"}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
