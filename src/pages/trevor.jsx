import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/styles';

import { CronologiaContext } from '../CronologiaContext';

import Image from "next/image"
import sampleImage from "../../public/trevorimage.png"


const useStyles = makeStyles({
  root: {
    height: "auto", 
    width: "auto",   
    display: "flex",
  },
  content: {     
    backgroundColor: 'black',
    color: "white",    
  },
  txt: {
    color: "white"
  },
  img: {
    background: "rgb(0,0,0)",
  }
});

export default function Trevor() {

  //const router = useRouter();

  const conteudoTxt = React.useContext(CronologiaContext);
  var title = conteudoTxt.map((c) => c.trevor.title);
  var txt = conteudoTxt.map((c) => c.trevor.content);
  //var img = conteudoTxt.map((c) => c.alucard.img);
  
  console.log("content: ", conteudoTxt);

  const classes = useStyles();

  return (
    <Card sx={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.img}>
          <Image
            src={sampleImage}
            alt="A Picture of Sypha"
            width="600"
            height="600"
          />
        </div>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.txt}
        >
          <h5>{title}</h5>
        </Typography>
        <Typography className={classes.txt}>
          <p>{txt}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartilhar</Button>
        <Button size="small">Aprenda mais</Button>
      </CardActions>
    </Card>
  );
}
