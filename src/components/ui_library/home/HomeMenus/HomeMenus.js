import './HomeMenus.css';
import VerticalBar from '../../unit/VerticalBar/VerticalBar';
import { useSelector, useDispatch } from "react-redux";
import { changeHomeMenu } from '../../../../_reducers/home';


export default function HomeMenus() {
    const {menu} = useSelector(state => state.home);

    return (
        <div className='home-menus-container'>
            <HomeMenu currentHomeMenu={menu} homeMenuText='주식 데이터'></HomeMenu>
            <VerticalBar horizontalMargin='0px' width='1px' height='20px'></VerticalBar>
            <HomeMenu currentHomeMenu={menu} homeMenuText='경제 데이터'></HomeMenu>
            <VerticalBar horizontalMargin='0px' width='1px' height='20px'></VerticalBar>
            <HomeMenu currentHomeMenu={menu} homeMenuText='산업 데이터'></HomeMenu>
            <VerticalBar horizontalMargin='0px' width='1px' height='20px'></VerticalBar>
            <HomeMenu currentHomeMenu={menu} homeMenuText='포트폴리오 관리'></HomeMenu>
            <VerticalBar horizontalMargin='0px' width='1px' height='20px'></VerticalBar>
            <HomeMenu currentHomeMenu={menu} homeMenuText='시뮬레이션'></HomeMenu>
        </div>
    )
}

function HomeMenu(props) {
    const dispatch = useDispatch();
    const currentHomeMenu = props.currentHomeMenu;
    const homeMenuText = props.homeMenuText;

    const changeHomeContents = () => {
        dispatch(changeHomeMenu(homeMenuText));
    }

    if (currentHomeMenu === homeMenuText) {
        return (
            <div>
                <button className='home-menu-button'>
                    <span className="home-menu-button-text on">{homeMenuText}</span>
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <button className='home-menu-button' onClick={changeHomeContents}>
                    <span className="home-menu-button-text off">{homeMenuText}</span>
                </button>
            </div>
        )
    }

    
}