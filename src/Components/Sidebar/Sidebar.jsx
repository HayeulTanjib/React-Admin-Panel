import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DatasetIcon from '@mui/icons-material/Dataset';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">React Admin</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className = "icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PeopleIcon className = "icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <InventoryIcon className = "icon"/>
                        <span>Products</span>
                    </li>
                    <li>
                        <ListAltIcon className = "icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className = "icon"/>
                        <span>Delivary</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentIcon className = "icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className = "icon"/>
                        <span>Notifiaction</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyIcon className = "icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <DatasetIcon className = "icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className = "icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className = "icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className = "icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            <p className="title">THEME</p>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;