import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import './IconMenu.css';

import { changePage } from "../../../../_reducers/pager";

export default function IconMenu(props) {
    const activatedImage = props.activatedImage;
    const deactivatedImage = props.deactivatedImage;
    const menuName = props.menuName;
    const currentPage = props.currentPage;
    const url = props.url;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navtigatePage = () => {
        dispatch(changePage(menuName));
        navigate(url);
        window.scrollTo(0,0);
    }

    if (menuName === currentPage) {
        return (
            <button className='icon-menu-container'>
                <img src={activatedImage} style={{width:'24px',height:'24px'}} alt={menuName}></img>
                <span className="icon-menu on">{menuName}</span>
            </button>
        )
    } else {
        return (
            <button className='icon-menu-container' onClick={navtigatePage}>
                <img src={deactivatedImage} style={{width:'24px',height:'24px'}} alt={menuName}></img>
                <span className="icon-menu off">{menuName}</span>
            </button>
        )
    }
}