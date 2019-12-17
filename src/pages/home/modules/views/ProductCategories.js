import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import '../media/corretion.css';
import quadro3 from '../media/quadro3.jpg';
import quadro1 from '../media/quadro1.jpg';
import quadro2 from '../media/quadro2.jpg';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '55vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  text: {
    position: 'absolute',
    top: '40%',
    textAlign:'left',
    fontSize: '10%',
    color: 'white',
    margin:20,
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url: quadro1,
      title: 'PERCURSO',
      text: 'O aplicativo fornecerá as rotas mais acessíveis para o motorista, de forma dinâmica. nós automatizaremos para que nossa aplicação atenda com o melhor percurso possivel para cada passageiro,facilitando você Motorista para uma melhor trajetoria',
      width: '33%',
    },
    {
      url:
        quadro3,
        text: 'Gerencie a entrada e saida de passageiros, seu local de saida e destino final, antecipe se ela ira ao encontro de sua Van, consulte clientes e mapeie tudo com nossa aplicação.',
        title: 'CLIENTE',
      width: '33%',
    },
    {
      url:
        quadro2,
        text: 'Tenha uma ferramenta para gestão de controle de caixa digital. ',
        title: 'FINANCEIRO',
      width: '33%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
        SERVIÇOS
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
              
            </div>
            <div className={classes.text}>
            <Typography variant="h5">
                {image.text}
              </Typography>
              </div>
            
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
