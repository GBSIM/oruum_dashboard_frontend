import './SideNavMenuBar.css';

import ImageContainer from '../../unit/ImageContainer/ImageContainer';
import IconTextButton from '../../unit/IconTextButton/IconTextButton';

export default function SideNavMenuBar() {
    return (
        <div className='side-nav-menu-bar-container'>
            <ImageContainer
                image={require('../../images/OruumLogo/logo_oruum_investment_manager.png')}
                imageHeight='50px'
                containerHeight='60px'></ImageContainer>
            <div style={{minHeight:'50px'}}></div>
            <IconTextButton
                buttonOn={true}
                buttonOnImage={require('../../images/Icon/icon_home_light_black.png')}
                buttonOnTextColor='#333333'
                buttonOffTextColor='#DCDCDC'
                betweemSpace='7px'
                text='대쉬보드 홈'></IconTextButton>
        </div>
    )
}