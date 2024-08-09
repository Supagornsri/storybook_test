import { Button } from 'antd';
import PropTypes from "prop-types";

function ColorButton({ label = "Submit", size = "small", backgroundColor = "blue", onClick, color = "white" }) {

  return (
    <Button
      style={{ backgroundColor: backgroundColor, color: color }}
      size={size}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

ColorButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "default", "large"]),
  onClick: PropTypes.func,
};

export default ColorButton;