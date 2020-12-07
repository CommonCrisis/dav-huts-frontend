import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

const divStyle = {
  color: "blue",
  paddingTop: 2,
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
            {props.hutName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hut Id: {props.hutText}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Free Beds: {props.freeBeds}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default HutCard;
