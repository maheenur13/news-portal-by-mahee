import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dotdotdot from 'react-dotdotdot'


const useStyles = makeStyles({
    root: {
      maxWidth: 330,
    },
    media: {
      height: 150,
    },
  });

const SingleNews = ({props}) => {
    console.log('maheeeeeeee nurr anonna',props.allNewsData[0])
    const data = props?.allNewsData[0]
    const classes = useStyles();
 console.log(data.imageFile)
  return (
    <Card className={`${classes.root}`}>
      <CardActionArea>
        <img
          className={classes.media}
          src={`data:image/jpeg;base64,${data.imageFile}`}
          // title="Contemplative Reptile"
          alt=""
        />
        <CardContent>
          <Dotdotdot clamp={2}
           >
            <h1>{data?.title}</h1>
          </Dotdotdot>
          <Dotdotdot clamp={4}>
          <Typography variant="body2" color="textSecondary" component="p">
           {data?.description}
          </Typography>
            </Dotdotdot>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>

        <a href={props.url} size="small" color="primary" rel="noreferrer" target="_blank">
          Learn More
        </a>
      </CardActions>
    </Card>
  );
};

export default SingleNews;