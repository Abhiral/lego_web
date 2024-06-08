import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

import CloseIcon from "@mui/icons-material/Close";
import "./Popup.css";
const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    background: "linear-gradient(270deg,#0024E1, #0487D8)",
    minHeight: "20%",
    maxHeight: "90%",
  },
  dialogTitle: {
    padding: "0%",
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setPopups } = props;
  const classes = useStyles();

  return (
    <Dialog
      hideBackdrop
      open={openPopup}
      fullWidth
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
      <div className="header-wrapper">
          <div>
            <button
              onClick={() => {
                setPopups(false);
              }}
              style={{ border: 0, background: "transparent", color: "#fff" }}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="slogan">
            <span>Simplifying AI for Enterprises</span>
          </div>
          <div className="popuplogo">
            <img
              src="http://legoai.com/assets/images/LEGOAI_Logo.svg"
              alt="LegoAI"
            />
          </div>
          </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
