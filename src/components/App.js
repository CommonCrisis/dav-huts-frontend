import React, { useState } from "react";
// import useLocalStorage from "../functions/useLocalStorage";
import DateFnsUtils from "@date-io/date-fns";
import SnackbarHandler from "./SnackbarHandler";
import addDays from "../functions/dateFunctions";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import Button from "@material-ui/core/Button";
import MultipleSelect from "./locationSelector";
import getBeds from "../functions/getBeds";
import HutCardNew from "./HutCardNew";

const App = () => {
  const [hutData, setHutData] = useState([]);

  const [selectedStartDate, setselectedStartDate] = useState(
    new Date(3600000 * Math.floor(Date.now() / 3600000))
  );

  const [selectedEndDate, setselectedEndDate] = useState(
    new Date(3600000 * Math.floor(addDays(Date.now(), 1) / 3600000))
  );

  const handleDateChange = (date, type) => {
    if (type === "start") {
      setselectedStartDate(date);
    } else if (type === "end") {
      setselectedEndDate(date);
    }
  };

  const [serverMessage, setServerMessage] = useState({
    type: "info",
    message: "Hi there - Welcome to DAV hut finder",
    open: true,
  });

  // Styles
  const dateStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div>
      <SnackbarHandler
        {...{ serverMessage, setServerMessage }}
        messagePosition={{ vertical: "bottom", horizontal: "right" }}
      />
      <div style={dateStyles}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="From:"
            format="dd.MM.yyyy"
            value={selectedStartDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleDateChange(date, "start")}
          />
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="To:"
            format="dd.MM.yyyy"
            value={selectedEndDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={(date) => handleDateChange(date, "end")}
          />
        </MuiPickersUtilsProvider>
      </div>
      <MultipleSelect />
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getBeds(setHutData)}
        >
          Search
        </Button>
      </div>
      <div className="massDorms" style={cardStyle}>
        {hutData.map((item, index) => (
          <HutCardNew
            key={index}
            hutName={item["26.09.2020"]["massDorm"]["hutName"]}
            hutText={item["26.09.2020"]["massDorm"]["hutId"]}
            freeBeds={item["26.09.2020"]["massDorm"]["freeBeds"]}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
