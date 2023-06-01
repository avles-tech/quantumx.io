import { styled } from '@mui/system';
import { Datagrid } from 'react-admin';

const QDatagrid = styled(Datagrid)({
  '& .MuiTableHead-root .MuiTableCell-root, & .MuiTableSortLabel-active': {
    backgroundColor: 'blue !important',
    color: 'white !important',
  },
});

export default QDatagrid;
