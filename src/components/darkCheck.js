import { darkTheme,lightTheme } from "../App";

function darkCheck(props) {
    return props.isToggled ? darkTheme : lightTheme;
  }

export default darkCheck