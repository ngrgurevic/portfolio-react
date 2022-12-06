import { darkTheme,lightTheme } from "./Themes";

function darkCheck(props) {
    return props.isToggled ? darkTheme : lightTheme;
  }

export default darkCheck