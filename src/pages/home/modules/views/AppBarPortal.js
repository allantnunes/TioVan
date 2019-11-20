import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "../components/AppBar";
import tiovanTextLogo from "../media/tiovan_LOGO_TEXT.svg";
import UserIcon from "../../../../public/img/UserIcon.png";
import BusIcon from "../../../../public/img/BusIcon.png";
import RoutesIcon from "../../../../public/img/RoutesIcon.png";
import MoneyIcon from "../../../../public/img/MoneyIcon.png";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
const styles = theme => ({
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

function AppBarPortal(props) {
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
                        href="/"
                    >
                        {
                            <img
                                style={{ display: "block" }}
                                src={tiovanTextLogo}
                                alt="increase priority"
                            />
                        }
                    </Link>
                    <div className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={clsx(
                                classes.rightLink,
                                classes.linkSecondary
                            )}
                            href="/motorista/portal"
                        >
                            <img
                                style={{ display: "block" }}
                                src={BusIcon}
                                alt="increase priority"
                            />
                            {"Portal"}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/motorista/rotas"
                        >
                            <img
                                style={{ display: "block" }}
                                src={RoutesIcon}
                                alt="increase priority"
                            />
                            {"Rotas"}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/motorista/financeiro"
                        >
                            <img
                                style={{ display: "block" }}
                                src={MoneyIcon}
                                alt="increase priority"
                            />
                            {"Financeiro"}
                        </Link>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/motorista/perfis"
                        >
                            {"Perfis"}
                        </Link>
                    </div>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/motorista/user"
                    >
                        {
                            <img
                                style={{ display: "block" }}
                                src={UserIcon}
                                alt="increase priority"
                            />
                        }
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppBarPortal.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBarPortal);
