import React from "react";
import DeviceDetails from "./DeviceDetails/DeviceDetails";

const Device = ({name ,price}) => {
    return (
        <div>
            <h3>I have a Device: {name}</h3>
            <DeviceDetails price={price}></DeviceDetails>
        </div>
    );
};

export default Device;