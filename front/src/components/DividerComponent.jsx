import { Box } from "@mui/material";
import { greenCarbon, redCarbon } from "./Palette";
const DividerComponent = () => {
  return (
    <Box
      display="flex"
      flexDirection="row-reverse"
      height="5px"
      width="30%"
      position="absolute"
      bottom="0"
    >
      <Box flex="60%" bgcolor={greenCarbon} height="100%" />
      <Box flex="40%" bgcolor={redCarbon} height="100%" />
    </Box>
  );
};

export default DividerComponent;
