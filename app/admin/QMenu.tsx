import { Menu } from "react-admin";
import SubMenu from "./SubMenu";
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';
import TimerIcon from '@mui/icons-material/Timer';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';




export const QMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <SubMenu primaryText="Human Resource" leftIcon={<PeopleIcon />}>
            <Menu.ResourceItem name="CompanyDetails" />
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
        </SubMenu>
        <SubMenu primaryText="Leave Management" leftIcon={<BeachAccessIcon />}>
            <Menu.ResourceItem name="leaveModels" />
            <Menu.ResourceItem name="leaveTypes" />
        </SubMenu>
        <Menu.Item to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />} />
    </Menu>
);