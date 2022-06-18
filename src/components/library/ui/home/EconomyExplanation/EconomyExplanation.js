import IconTitleHeader from "../../unit/IconTitleHeader/IconTitleHeader"
import IconText from "../../unit/IconText/IconText"

export default function EconomyExplanation() {
    return (
        <div>
            <IconTitleHeader
                headerType='h2'
                iconImage={require('../../images/Icon/icon_dollar_oruum_green.png')}
                iconHeight='24px'
                textColor='#34B199'
                betweenSpace='10px'
                text='경제 데이터'></IconTitleHeader>
        </div>
    )
}