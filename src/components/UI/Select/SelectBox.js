import React from "react";
import classes from "./Select.module.css"

const selectBox = (props) => {
    return (
        <div className={`${classes.control}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <select onChange={props.onChange} id={props.id}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value} defaultValue={props.defaultValue === option.value}>
                        {option.name}
                    </option>
                ))};
            </select>
        </div>
    );
};

export default selectBox;
