import { Box } from "@mui/material";
import PropTypes from 'prop-types';

const DividerHome = ({ colorFirst, sizeFirst, colorSecond, sizeSecond, colorThird, sizeThird, colorFourth, sizeFourth, colorFifth, sizeFifth }) => {

  return (
    <Box
      display="flex"
      height="15px"
      width="100%"
      position="absolute"
    >
      <Box flex={sizeFirst} bgcolor={colorFirst} height="100%" />
      <Box flex={sizeSecond} bgcolor={colorSecond} height="100%" />
      <Box flex={sizeThird} bgcolor={colorThird} height="100%" />
      <Box flex={sizeFourth} bgcolor={colorFourth} height="100%" />
      <Box flex={sizeFifth} bgcolor={colorFifth} height="100%" />
    </Box>
  );
};

DividerHome.propTypes = {
  colorFirst: PropTypes.string.isRequired,
  sizeFirst: PropTypes.string.isRequired,
  colorSecond: PropTypes.string.isRequired,
  sizeSecond: PropTypes.string.isRequired,
  colorThird: PropTypes.string.isRequired,
  sizeThird: PropTypes.string.isRequired,
  colorFourth: PropTypes.string.isRequired,
  sizeFourth: PropTypes.string.isRequired,
  colorFifth: PropTypes.string.isRequired,
  sizeFifth: PropTypes.string.isRequired,
};

export default DividerHome;
