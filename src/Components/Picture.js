import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import "./Picture.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Picture = ({ pic }) => {
  const classes = useStyles();
  return (
    <Grid className="grid_item" item xs>
      <Paper className={classes.paper}>
        <img src={pic.urls.thumb} alt="" />
      </Paper>
    </Grid>
  );
};

export default Picture;
