import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BedChip from "./BedChip";
import "../styles/hutCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const divStyle = {
  color: "blue",
  paddingTop: 2,
  minHeight: '20vh',
  minWidth: '30vh'
};


const HutCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={divStyle}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../images/huts/sample_hut.jpg")}
          title="Hut Card"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.hutName ? props.hutName : 'Test'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hut Id: {props.hutName ? props.hutName : 'Test'}
          </Typography>
            <div className="hutCard">
              {Object.entries(props.freeBeds).map(([k, v]) => (
                // v && 
                <BedChip
                  bedType={k}
                  bedCount={v}
                />
              ))}
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Visit on DAV
        </Button>
      </CardActions>
    </Card>
  );
};

export default HutCard;
