import './SummaryValues.css';

import SummaryValue from '../../unit/SummaryValue/SummaryValue';

export default function SummaryValues(props) {
    const SummaryValueList = props.valueList.map((summaryValue,index) => (
        <SummaryValue
            title = {props.titleList[index]}
            value = {summaryValue}
            key = {index}></SummaryValue>
    ));

    return (
        <div style={{flex:'1'}}>
            {SummaryValueList}
        </div>
    )
}