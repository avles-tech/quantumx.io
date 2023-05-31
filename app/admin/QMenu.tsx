import { Menu } from "react-admin";
import SubMenu from "./SubMenu";
import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';

export const QMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <SubMenu primaryText="CMS" leftIcon={<BookIcon />}>
            <Menu.ResourceItem name="grades" />
            <Menu.ResourceItem name="departments" />
        </SubMenu>
        <Menu.Item to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />} />
    </Menu>
);