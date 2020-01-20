import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import Container from '@material-ui/core/Container';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ProfileCard({ user }) {
  const classes = useStyles();
  const [expanded] = React.useState(false);

  return (
      <Container>
    <Card className={classes.card}>
      <CardHeader avatar={<Avatar className={classes.avatar}>{user.name[0]}</Avatar>} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         
             <div><h4>Name:</h4> <span>{user.name}</span></div>
            
            <div><h4>Email:</h4> <span>{user.email}</span></div>
            
            <div><h4>Phone:</h4> <span>{user.phone}</span> </div>
          
        </Typography>
      </CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        <Link
        to="/users-list"
        >
        Posts
        </Link>
        
      </Typography>

      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
    </Card></Container>
  );
}
