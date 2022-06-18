import './StockPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../library/ui/nav/SideNavMenuBar/SideNavMenuBar';
import BottomNavMenuBar from '../../ui_library/block/BottomNavMenuBar/BottomNavMenuBar';
import Header from '../../ui_library/block/Header/Header';

export default function StockPage() {
    return (
        <div className='page'>
            {/* <NavBar></NavBar> */}
            <SideNavMenuBar></SideNavMenuBar>
            <div className='main-contents'>
                <Header>
                </Header>
                <div className='page-contents'>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            
        </div>
    )
}