import RoundedButtons from "../../unit/RoundedButtons/RoundedButtons"
import AddButton from "../../unit/AddButton/AddButton";
import './StockTagList.css';

import { useSelector,useDispatch } from "react-redux";

export default function StockTagList(props) {
    const {tagList} = useSelector(state => state.stock);

    return (
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <RoundedButtons textList={tagList}></RoundedButtons>
            <div className="stock-tag-list-add-button-container">
                <AddButton text='추가하기'></AddButton>
            </div>
        </div>
    )
}