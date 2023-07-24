import { Menu } from "react-admin";
import SubMenu from "./SubMenu";
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';
import TimerIcon from '@mui/icons-material/Timer';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import reportPage from "./reportPage";

export const QMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <SubMenu primaryText="Human Resource" leftIcon={<SupervisorAccountIcon />}>
            {/* <Menu.ResourceItem name="CompanyDetails"  /> */}
            <Menu.ResourceItem name="employee" />
            <Menu.ResourceItem name="geoLocations" />
            <Menu.ResourceItem name="grades" />
            <Menu.ResourceItem name="departments" />
        </SubMenu>
        <SubMenu primaryText="Time & Attendance" leftIcon={<TimerIcon />}>
            <Menu.ResourceItem name="roster" />
            <Menu.ResourceItem name="shifts" />
            <Menu.ResourceItem name="holidayTypes" />
            <Menu.ResourceItem name="devices" />
            <Menu.ResourceItem name="attendanceLog" />
        </SubMenu>
        <SubMenu primaryText="Leave Management" leftIcon={<Diversity1Icon />}>
            <Menu.ResourceItem name="leaveModels" />
            <Menu.ResourceItem name="leaveTypes" />
        </SubMenu>
        <SubMenu primaryText="User Management" leftIcon={<AccountCircleIcon />}>
            <Menu.ResourceItem name="users" />

        </SubMenu>
        <SubMenu primaryText="Reports" leftIcon={<LabelIcon />}>
            <Menu.Item to="/report" primaryText="Attenadance Report" leftIcon={<LabelIcon />} />
        </SubMenu>

        {/* <Menu.Item to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />} /> */}
    </Menu>
);