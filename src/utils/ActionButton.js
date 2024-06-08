import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: "#f7327a",

    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: "#f7327a",
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
  danger: {
    margin: 0,
    backgroundColor: "#c6cef9",
    "& .MuiButton-label": {
      color: "#c92121",
    },
  },
  warning: {
    margin: 0,
    backgroundColor: "#c6cef9",
    "& .MuiButton-label": {
      color: "#198754",
    },
  },
}));

export default function ActionButton(props) {
  const { text, color, children, onClick } = props;
  const classes = useStyles();

  return (
    <Button
      disableEnforceFocus
      className={`${classes.root} ${classes[color]}`}
      onClick={onClick}
    >
      {children}
      {text}
    </Button>
  );
}
