import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="toggle-theme">
      <button onClick={() => {
        dispatch(toggleTheme());
      }} className={theme ? "btn btn-light": "btn btn-dark"}>{theme ? "Dark" : "Light"}</button>
    </div>
  );
};
export default ToggleTheme;