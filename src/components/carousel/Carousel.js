import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import './Carousel.css'


const Carousel = [
  {
    name: 'photo 1',
    label: 'AVATAR',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtCnfObumew5nvW_WgXtDLWh-SsDJQ-xv7lwjanQsXkYoMI8unvFv2sT_wP5HD1XKVEq4wmgE&usqp=CAc',
  },
  {
    name: 'photo 2',
    label: 'SCARFACE',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTH47lyb22N-tWh0pJ1H-zrQL_G30yO0T0PIXXpk7YGUSyPf9dxcy-90fczEg&usqp=CAc',
  },
  {
    name: 'photo 3',
    label: 'BACK TO FUTURE',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL9OykJ0dVULUYqM9E0z6k6wQLb0-4egNMF9IQJLsJBBKWUYYTH9NAPkwYgQ&usqp=CAc',
  },
  {
    name: 'photo 4',
    label: 'FROZEN',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2gTs604QCYPMFFxUr5CY31GI9YKlU1BGmz6w0D9_9_q_MOkLQ8K_mMEj4-w&usqp=CAc',
  },
  {
    name: 'photo 5',
    label: 'PERFUME',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXga-1C-3Tyjly3FCvUgHQmTOjgyCG8tDnLw&usqp=CAU',
  },
  {
    name: 'photo 6',
    label: 'DUNKIRK',
    imgPath:
      'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88205/90762/Dunkirk-2017-Advance-Style-Poster-buy-original-movie-posters-at-starstills__51424.1496222583.jpg?c=2?imbypass=on',
  },
  {
    name: 'photo 7',
    label: 'HARRY POTTER',
    imgPath:
      'https://cdn.shopify.com/s/files/1/0037/8008/3782/files/harry_potter_and_the_philosophers_stone_advance_NG06279_B2_framed2_e254b337-21ad-486a-af43-eec0b8f97d07_1024x1024.jpg?v=1577633395',
  },
  {
    name: 'photo 8',
    label: 'GAME OF THRONES',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4aDl4lvhAVAdUUUCU1xXa_ZMNyqWGqKlGdbOPmtVEu2FFh-f4Vc8fSpxrXZRD9SW2Lh00tnBm&usqp=CAc',
    },
    {
      name: 'photo 9',
    label: 'TIME IS THE ENEMY',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJEEBN5nCJzAw9Vth5Y5ih1naHGrdGkHFZjA&usqp=CAU',
    },
    {
    name: 'photo 10',
    label: 'BEAUTY AND THE BEAST',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3Dw_vZ-miu7J7Tc3bpjvdxATYIKzRo8KX0w&usqp=CAU',
    },
];



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    position: 'relative',
  },
 
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing(4),
    marginLeft: 50,
    alignContent: 'center',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
  },
  img: {
    height: 700,
    width: 700,
    overflow: 'hidden',
    display: 'block',
    borderWidth: 100,
    alignItems: 'center',
    paddingLeft: '200px',
    marginLeft: '150px',
  },
}));

export default function TextMobileStepper() {
  
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Carousel.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Typography className="carousel">{Carousel[activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={Carousel[activeStep].imgPath}
        alt={Carousel[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>

  );
}
