import Chip from "@material-ui/core/Chip";
import React from "react";
import Avatar from "@material-ui/core/Avatar";


const BedChip = (props) => {
    return (
        <Chip 
            variant="outlined" 
            color={props.bedCount ? "primary" : "secondary"}
            avatar={<Avatar>{props.bedCount ? props.bedCount : 0}</Avatar>} 
            label={props.bedType}
        />
    )
};

export default BedChip;