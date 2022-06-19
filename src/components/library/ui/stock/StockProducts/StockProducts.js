import { useSelector,useDispatch } from "react-redux";
import IconText from "../../unit/IconText/IconText";
import AddButton from "../../unit/AddButton/AddButton";

export default function StockProducts() {
    const {koreanName, prouductList, salesRatioList, growthRateList, productDetailList} = useSelector(state => state.stock);
    const stockProductList = prouductList.map((product,index) => (
        <div>
            <StockProduct
            productName={product}
            salesRatio={salesRatioList[index]}
            growthRate={growthRateList[index]}
            productDetailList={productDetailList[index]}></StockProduct>
            <div style={{minHeight:'20px'}}></div>
        </div>
    ))

    return (
        <div>
            <h2 style={{color:'#333333'}}>{koreanName}, 어떤 제품을 파나요?</h2>
            <div style={{minHeight:'10px'}}></div>
            {stockProductList}
        </div>
    )
}

function StockProduct(props) {
    const productDetailList = props.productDetailList.map((productDetail,index) => (
        <div>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text={productDetail}></IconText>
            <div style={{height:'5px'}}></div>
        </div>
        
    ))
    return (
        <div>
            <h3 style={{color:'#696969',margin:'0px'}}>{props.productName}</h3>
            <div style={{height:'5px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignContent:'center'}}>
                <span style={{color:'#B9B9B9'}}>매출비율</span>
                <div style={{width:'10px'}}></div>
                <span style={{color:'#34B199'}}>{props.salesRatio}%</span>
                <div style={{width:'30px'}}></div>
                <span style={{color:'#B9B9B9'}}>연성장률</span>
                <div style={{width:'10px'}}></div>
                <span style={{color:'#34B199'}}>{props.growthRate}%</span>
            </div>
            <div style={{height:'5px'}}></div>
            {productDetailList}
            <AddButton text='추가하기'></AddButton>
        </div>
    )
}