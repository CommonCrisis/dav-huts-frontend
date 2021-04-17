import React, {useState} from "react";
import CustomSlider from "./Slider";
import Button from "@material-ui/core/Button";
import MultipleSelect from "./locationSelector";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styles from "../styles/style.selectionArea.scss";


const SearchSelector = (props) => {
    const [selectedStartDate, setselectedStartDate] = useState(new Date(3600000 * Math.floor(Date.now() / 3600000)));

    const handleDateChange = (date, type) => {
        setselectedStartDate(date);
    };


    return (
        <div className={styles.selctionArea}>
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker autoOk variant="inline" inputVariant="outlined" label="Start date:" format="dd.MM.yyyy"
                        value={selectedStartDate}
                        InputAdornmentProps={
                            {position: "start"}
                        }
                        onChange={
                            (date) => handleDateChange(date, "start")
                        }/>
                </MuiPickersUtilsProvider>
            </div>
            <div className="Select Container">
                <MultipleSelect/>
            </div>
            <div className="Slider Container">
                <CustomSlider name="Days"
                    defaulValue={1}
                    step={1}
                    minValue={1}
                    maxValue={10}/>
                <CustomSlider name="People"
                    defaulValue={1}
                    step={1}
                    minValue={1}
                    maxValue={20}/>
            </div>
        </div>
    );
};

export default SearchSelector;
