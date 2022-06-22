import { useSelector,useDispatch } from "react-redux";

import ImageContainer from "../../unit/ImageContainer/ImageContainer";
import TextButton from "../../unit/TextButton/TextButton";

import './StockProfile.css';

export default function StockProfile() {
    const {koreanName, englishName, ticker} = useSelector(state => state.stock);

    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <ImageContainer
                imageHeight='40px'
                image={require('../../images/StockLogo/logo_aapl.png')}></ImageContainer>
            <div style={{marginLeft:'10px'}}>
                <div>
                    <span style={{color:'#333333',fontWeight:'500'}}>{koreanName}</span>
                </div>
                <div>
                    <span style={{color:'#B9B9B9',fontWeight:'500'}}>{englishName} ({ticker})</span>
                </div>
            </div>
            <div className="stock-profile-edit-button-container">
                <TextButton isButtonOn={false} buttonOffTextColor='#B9B9B9' text='편집하기'></TextButton>
            </div>
        </div>
    )
}