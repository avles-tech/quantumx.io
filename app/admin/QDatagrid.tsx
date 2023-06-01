import { styled } from '@mui/system';
import { Datagrid } from 'react-admin';

const QDatagrid = styled(Datagrid)({
  '& .MuiTableHead-root .MuiTableCell-root, & .MuiTableSortLabel-active': {
    backgroundColor: '#3f51b5 !important',
    color: 'white !important',
  },
});

export default QDatagrid;
