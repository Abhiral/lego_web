import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    marginTop: theme.spacing(2),
  },
  label: {
    textTransform: "none",
  },
}));

export default function Button(props) {
  const { text, size, color, variant, disabled, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "small"}
      color={color || "primary"}
      onClick={onClick}
      disabled={disabled}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
