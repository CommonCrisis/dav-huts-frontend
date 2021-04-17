import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 600,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = ["Germany", "Switzerland", "Austria"];

const MultipleSelect = () => {
  const dateStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const classes = useStyles();
  const [countryName, setCountryName] = React.useState([]);

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div style={dateStyles}>
      <FormControl className={classes.formControl}>
        <InputLabel id="Select da country">Select countrie(s)</InputLabel>
        <Select
          labelId="loc select"
          id="loc select"
          multiple
          value={countryName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              <Checkbox checked={countryName.indexOf(country) > -1} />
              <ListItemText primary={country} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
