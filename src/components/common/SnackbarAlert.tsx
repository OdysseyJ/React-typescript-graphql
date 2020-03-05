import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { useApolloClient, useLazyQuery } from "@apollo/react-hooks";
import {
  GET_ALERT_OPEN_IN_CACHE,
  GET_ALERT_FUNC_IN_CACHE
} from "../../queries/HomeQueries";

const SnackbarAlert = () => {
  const client = useApolloClient();
  const [state, setState] = useState({
    open: false,
    message: "",
    type: ""
  });

  const [getAlert, { data }] = useLazyQuery(GET_ALERT_OPEN_IN_CACHE);

  useEffect(() => {
    client.writeQuery({
      query: GET_ALERT_FUNC_IN_CACHE,
      data: { getAlert: getAlert }
    });
  }, [client, getAlert]);

  useEffect(() => {
    if (data) {
      setState({ open: data.open, message: data.message, type: data.type });
    }
  }, [data]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    client.writeQuery({
      query: GET_ALERT_OPEN_IN_CACHE,
      data: {
        open: false,
        message: "",
        type: "",
        __typename: ""
      }
    });
    setState({ ...state, open: false, message: "", type: "" });
  };

  let severity: "success" | "error";
  if (state.type === "error") {
    severity = "error";
  } else {
    severity = "success";
  }

  if (data && state.open) {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {state.message}
        </Alert>
      </Snackbar>
    );
  } else return null;
};

export default SnackbarAlert;
