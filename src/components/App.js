import React, { useState } from "react";
// import useLocalStorage from "../functions/useLocalStorage";
import SnackbarHandler from "./SnackbarHandler";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import SearchSelector from "./SearchSelector";
import getBeds from "../functions/getBeds";
import loadFake from "../functions/loadFakeData";
import HutCardDisplay from "./HutCardDisplay";

const App = () => {
  
  const [hutData, setHutData] = useState();



  const [serverMessage, setServerMessage] = useState({
    type: "info",
    message: "Hi there - Welcome to DAV hut finder",
    open: true,
  });

  // Styles

  const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // alignItems: "center",
  };

  return (
    <div>
      <SnackbarHandler
        {...{ serverMessage, setServerMessage }}
        messagePosition={{ vertical: "bottom", horizontal: "right" }}
      />
      <SearchSelector />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loadFake(setHutData)}
        >
          Search
        </Button>
      </div>
      <div className="test" style={cardStyle}>
        {hutData ? (
          <HutCardDisplay data={hutData} />
        ) : (
          <CircularProgress />
        )
        }
      </div>
 
    </div>
  );
};

export default App;
