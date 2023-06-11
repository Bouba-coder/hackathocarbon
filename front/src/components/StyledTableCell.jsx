import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from '@mui/material/styles';
import { greyCarbon, whiteCarbon } from './Theme';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: 20,
      backgroundColor: greyCarbon,
      color: whiteCarbon,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18,
    },
  }));

export default StyledTableCell;