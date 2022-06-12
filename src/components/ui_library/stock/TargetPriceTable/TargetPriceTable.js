import TextWithVerticalBar from "../../unit/TextWithVerticalBar/TextWithVerticalBar";
import TableContents from "../../unit/TableContents/TableContents";
import TableHeader from "../../unit/TableHeader/TableHeader";

export default function TargetPriceTable(props) {
    return (
        <div style={{flex:'1',width:'100%'}}>
            <h3 style={{color:'#696969',margin:'0px'}}>{props.title}</h3>
            <div style={{minHeight:'30px'}}></div>
            <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <TextWithVerticalBar 
                    textType='h3' 
                    leftText='최고비율' 
                    rightText={props.highValue}
                    leftColor='#B9B9B9'
                    rightColor='#34B199'></TextWithVerticalBar>
                <TextWithVerticalBar 
                    textType='h3' 
                    leftText='최저비율' 
                    rightText={props.lowValue}
                    leftColor='#B9B9B9'
                    rightColor='#F15E5E'></TextWithVerticalBar>
            </div>
            <div style={{minHeight:'30px'}}></div>
            <TableHeader headerList={['','2022','2023','2024']}></TableHeader>
            <TableContents contentsList={[props.indicator,20,20,20]}></TableContents>
            <TableContents contentsList={['최고예상주가',170,170,170]}></TableContents>
            <TableContents contentsList={['최저예상주가',150,150,150]}></TableContents>

        </div>
    )
}