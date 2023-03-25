import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({type}) => {

    //temp data
    let data;
    const amount = 100;
    const diff = 50;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' style={{color: 'crimson'}}/>
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all oders",
                icon: <ShoppingCartOutlinedIcon className='icon' style={{color: 'yellow', backgroundColor: ""}}/>
            }
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <AttachMoneyOutlinedIcon className='icon' style={{color: 'green', backgroundColor: ""}}/>
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color: 'purple', backgroundColor: ""}}/>
            }
            break;
    
        default:
            break;
    }

    return (
        <div className='widget'>
             <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
             </div>
             <div className="right">
                <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                + {diff} %
                </div>
                {data.icon}
             </div>
        </div>
    );
};

export default Widget;