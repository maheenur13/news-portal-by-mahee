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
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      padding:'13px',
      marginBottom:'5px',
      marginTop:'5px'
    },
    media: {
      // width: '100%',
      margin: 'auto',
      height: 150,
    },
    skeleton:{
      width:'300px',
    }
  });

const SingleNews = (props) => {
  console.log('whats the hack mahee',props)
  const {imageFile,title,description}= props.props;
    const classes = useStyles();
  return (
    <>
   <Card className={`${classes.root}`}>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={imageFile}
        // title="Contemplative Reptile"
        alt=""
      />
        <CardContent>
          <Dotdotdot clamp={2}
           >
            <h1 className="mb-3" style={{fontWeight:'600'}}>{title}</h1>
          </Dotdotdot>
          <Dotdotdot clamp={4}>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
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
    </>
  );
};

export default SingleNews;