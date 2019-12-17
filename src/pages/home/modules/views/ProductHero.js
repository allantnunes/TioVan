import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import BannerVan from '../media/Composição1.3c.svg';
import { Link } from 'react-router-dom';
import MariaLucia from '../media/Maria_lucia.ttf';
import '../media/font.css';

const mariaLu = {
  fontFamily: 'MariaLucia',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('MariaLucia'),
    local('MariaLucia-Regular'),
    url(${MariaLucia}) format('ttf')
  ` ,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const styles = theme => ({
  background: {
    background: `no-repeat url(${BannerVan})`,
    backgroundSize: `1500px auto`,
    backgroundColor: '#f2f6fa', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    top: 60,
    minWidth: 200,
    right: '250%',
  },
  h5: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(-19),
    },
    fontFamily: 'MariaL, cursive',
    right: 20,
  },
  h5_2: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
    },
    fontFamily: 'MariaL, cursive',
    right: 20,

  },
  overrides: {
    MuiCssBaseline: {
      '@global': { '@font-face': [mariaLu], }
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  left: {
    width: '100%',
    textAlign: 'left',
  },
  classeDahora: {
  },
});




function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} url={{ BannerVan }} />
      <div className={classes.left}>
        <Typography color="inherit" align="left" variant="h2" className={classes.h5}>
          Facilite suas viagens
      </Typography>
        <Typography color="inherit" align="left" variant="h2" className={classes.h5_2}>
          com <spam className={classes.classeDahora}>tiovan</spam>
        </Typography>
      </div>

      <Link to="/cadastro" color="inherit">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
        // to="/cadastro"
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