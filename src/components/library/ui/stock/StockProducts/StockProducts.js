import { useSelector,useDispatch } from "react-redux";
import IconText from "../../unit/IconText/IconText";
import AddButton from "../../unit/AddButton/AddButton";
import TextButton from "../../unit/TextButton/TextButton";
import './StockProducts.css';

export default function StockProducts() {
    const {koreanName, prouductList, salesRatioList, growthRateList, productDetailList} = useSelector(state => state.stock);
    const stockProductList = prouductList.map((product,index) => (
        <div className="stock-product-box">
            <StockProduct
            productName={product}
            salesRatio={salesRatioList[index]}
            growthRate={growthRateList[index]}
            productDetailList={productDetailList[index]}></StockProduct>
            <div style={{minHeight:'30px'}}></div>
        </div>
    ))

    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <h2 style={{color:'#333333',margin:'0'}}>{koreanName}, 어떤 제품을 파나요?</h2>
                <div className="stock-products-edit-button-container">
                    <TextButton isButton={false} buttonOffTextColor='#B9B9B9' text='편집하기'></TextButton>
                </div>
            </div>
            <div style={{minHeight:'20px'}}></div>
            <div className="stock-product-container">
                {stockProductList}
            </div>
        </div>
    )
}

function StockProduct(props) {
    const productDetailList = props.productDetailList.map((productDetail,index) => (
        <div>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                textColor='#696969'
                betweenSpace='10px'
                text={productDetail}></IconText>
            <div style={{height:'7px'}}></div>
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
            <div style={{height:'10px'}}></div>
            {productDetailList}
        </div>
    )
}