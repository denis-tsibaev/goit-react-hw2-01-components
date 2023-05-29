import PropTypes from "prop-types";
import style from "./container.module.css";

const Container = ({ children }) => (
  <div className={style.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
