import {
  GET_ALERT_OPEN_IN_CACHE,
  GET_ALERT_FUNC_IN_CACHE
} from "../queries/HomeQueries";
import { useApolloClient } from "@apollo/react-hooks";

const useAlert = (message: string, type?: string) => {
  let typename = "error";
  if (type) {
    typename = type;
  }
  const client = useApolloClient();

  const showAlert = () => {
    client.writeQuery({
      query: GET_ALERT_OPEN_IN_CACHE,
      data: {
        open: true,
        message: message,
        type: typename,
        __typename: ""
      }
    });
    const alertOpenFunction = client.readQuery({
      query: GET_ALERT_FUNC_IN_CACHE
    });
    alertOpenFunction.getAlert();
  };

  return showAlert;
};

export default useAlert;
