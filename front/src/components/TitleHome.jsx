import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const TitleHome = ({ title, variant, align, color }) => {
  return (
    <Typography variant={variant} align={align} color={color}>
      {title}
    </Typography>
  );
};

TitleHome.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TitleHome;
