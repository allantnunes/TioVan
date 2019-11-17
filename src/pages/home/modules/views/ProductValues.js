import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Localm from '../media/LOCALm.svg';
import passageiro from '../media/boy.svg';
import settings from '../media/settings.svg'
import fundo from '../media/productCurvyLines.png'


const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  text:{
    textAlign: 'justify',
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={Localm}
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                rotas
              </Typography>
              <Typography variant="h5" className={classes.text}>
                {'Rapido e Pratico, com cada região cadastrada dos passageiros,'}
                {' nós automatizaremos para que nossa aplicação atenda com o melhor PERCURSO possivel para cada' }
                {' passageiro,facilitando você Motorista para uma melhor trajetoria'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={passageiro}
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                passageiros
              </Typography>
              <Typography variant="h5" className={classes.text}>
                {'Na palma da mão! Gerencie a entrada e saida de passageiros, seu local de saida e destino final, '}
                {'antecipe se ela ira ao encontro de sua Van, mapeie tudo com nossa aplicação.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={settings}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Controle
              </Typography>
              <Typography variant="h5" className={classes.text}>
                {'Tenha acesso a tudo que esta acontecendo, '}
                {'rotas, financeiro e gerenciamento de passageiros.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
