import Chart from '../../Components/Charts/Chart';
import Featured from '../../Components/Featured/Featured';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableData from '../../Components/Table/TableData';
import Widget from '../../Components/Widget/Widget';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homecontainer">
            <Navbar/>
          <div className="widgets">
            <Widget type = "user"/>
            <Widget type = "order"/>
            <Widget type = "earning"/>
            <Widget type = "balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <TableData/>
          </div>
            </div>
        </div>
    );
};

export default Home;