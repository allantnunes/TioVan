import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import BannerVan from '../media/Composição1.3c.svg';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const styles = theme => ({
=======


export const styles = theme => ({
>>>>>>> e795d0f4e96507269b637224120d941de37339ef
  background: {
    background: `no-repeat url(${BannerVan})`,
    backgroundSize: `1500px auto`,
    backgroundColor: '#f2f6fa', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    top:110,
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} url={{ BannerVan }} />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        TIOVAN
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Facilite suas viagens com TioVan.
      </Typography>

      <Link to="/cadastro" color="inherit">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
        // href="/cadastro"
        >
          Registre-se
      </Button>
      </Link>

      {/* <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography> */}
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);