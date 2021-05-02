import React, {useState} from "react";
import CustomSlider from "./Slider";
import Button from "@material-ui/core/Button";
import MultipleSelect from "./locationSelector";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "../styles/selectionArea.css";
import getBeds from "../functions/getBeds";
import loadFake from "../functions/loadFakeData";

const SearchSelector = (props) => {
    const [selectedStartDate, setselectedStartDate] = useState(new Date(3600000 * Math.floor(Date.now() / 3600000)));
    const [people, setPeople] = useState(1);
    const [days, setDays] = useState(1);
    const [country, setCountry] = useState([]);

    const handleDateChange = (date) => {
        setselectedStartDate(date);
    };

    const handleSliderChange = () => {
        console.log(people);
        console.log(days);
    };


    return (
        <div className="selectionArea">
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker autoOk variant="inline" inputVariant="outlined" label="Start date:" format="dd.MM.yyyy"
                        value={selectedStartDate}
                        InputAdornmentProps={
                            {position: "start"}
                        }
                        onChange={
                            (date) => handleDateChange(date)
                        }/>
                </MuiPickersUtilsProvider>
            </div>
            <div className="Slider Container">
                <CustomSlider name="Days"
                    defaulValue={1}
                    step={1}
                    minValue={1}
                    maxValue={10}
                    setHandler={setDays}/>
                    </div>
            <div className="Select Container">
                <MultipleSelect/>
            </div>
            <div className="Slider Container">
                <CustomSlider name="People"
                    defaulValue={1}
                    step={1}
                    minValue={1}
                    maxValue={20}
                    setHandler={setPeople}/>
            </div>
            <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getBeds(props.setHutData, selectedStartDate, days, people, country)}

        >
          Search
        </Button>
      </div>
        </div>
    );
};

export default SearchSelector;
