import {DARK_MODE} from "../../config/theme";
import React from "react";
import {IoIosSunny, IoIosMoon} from "react-icons/io";
import {IconButton} from "./index";

const DarkModeToggle = ({toggle, mode}) => {
  return (
    <IconButton
      mode={mode}
      onClick={toggle}
    >
      {mode === DARK_MODE ? <IoIosSunny/> : <IoIosMoon/>}
    </IconButton>
  );
};

export default DarkModeToggle;
