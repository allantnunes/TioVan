import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import tiovanTextLogo from "../media/tiovan_LOGO_TEXT.svg";
import UserIcon from "../../../../public/img/UserIcon.png";
import BusIcon from "../../../../public/img/BusIcon.png";
import RoutesIcon from "../../../../public/img/RoutesIcon.png";
import MoneyIcon from "../../../../public/img/MoneyIcon.png";
import UsersIcon from "../../../../public/img/UsersIcon.png";
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
                    <div className={classes.right} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        to="/"
                        title="TioVan"
                    >
                        {
                            <img
                                style={{ display: "block" }}
                                src={tiovanTextLogo}
                                alt="increase priority"
                            />
                        }
                    </Link>
                    {/* <div className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            title="Portal"
                            className={clsx(
                                classes.rightLink,
                                classes.linkSecondary
                            )}
                            to="/motorista/portal"
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
                            title="Rotas"
                            className={classes.rightLink}
                            to="/motorista/rotas"
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
                            title="Financeiro"
                            className={classes.rightLink}
                            to="/motorista/financeiro"
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
                            title="Perfis"
                            className={classes.rightLink}
                            to="/motorista/perfis"
                        >
                            <img
                                style={{ display: "block" }}
                                src={UsersIcon}
                                alt="increase priority"
                            />
                            {"Perfis"}
                        </Link>
                    </div> */}
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        title="Perfil"
                        className={classes.title}
                        to="/motorista/user"
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
