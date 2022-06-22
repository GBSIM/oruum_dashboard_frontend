import { useSelector,useDispatch } from "react-redux";
import TextButton from "../../unit/TextButton/TextButton";
import './StockNews.css';

export default function StockNews() {
    const {koreanName,newsImageList,newsLinkList,
           newsTitleList,newsContentsList,newsDateList,
           newsJournalList} = useSelector(state => state.stock);

    const NewsList = newsLinkList.map((newsLink,index) => (
        <div>
            <News
                image={newsImageList[index]}
                link={newsLinkList[index]}
                title={newsTitleList[index]}
                contents={newsContentsList[index]}
                date={newsDateList[index]}
                journal={newsJournalList[index]}></News>
            <div style={{height:'10px'}}></div>
        </div>
        
    ))

    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <h2 style={{color:'#333333',margin:'0'}}>{koreanName}의 최근 뉴스</h2>
                <div className="stock-check-point-edit-button-container">
                    <TextButton isButton={false} buttonOffTextColor='#B9B9B9' text='편집하기'></TextButton>
                </div>
            </div>
            <div style={{height: '20px'}}></div>
            {NewsList}
        </div>
    )
}

function News(props) {
    return (
        <div>
            <a className='news-container' href={props.link} target="_blank">
                <img className="news-image" src={props.image}></img>
                <div style={{minWidth: '15px'}}></div>
                <div className="news-text-container">
                    <h3 className="news-title">{props.title}</h3>
                    <span className="news-contents">{props.contents}</span>
                    <span className="news-information">by {props.journal}, {props.date}</span>
                </div>
            </a>
        </div>
    )
}