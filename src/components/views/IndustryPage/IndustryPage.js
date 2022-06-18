import './IndustryPage.css';
import '../../../default.css';
import SideNavMenuBar from '../../library/ui/nav/SideNavMenuBar/SideNavMenuBar';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import DashboardHeader from '../../library/ui/header/DashboardHeader/DashboardHaeder';

function IndustryPage() {
    return (
        <div className='page'>
            <SideNavMenuBar></SideNavMenuBar>
            <div className="main-contents">
                <DashboardHeader>
                </DashboardHeader>
                <div className='page-contents'>
                    
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}

export default IndustryPage;