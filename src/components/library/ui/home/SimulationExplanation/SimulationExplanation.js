import IconTitleHeader from "../../unit/IconTitleHeader/IconTitleHeader"
import IconText from "../../unit/IconText/IconText"

export default function SimulationExplanation() {
    return (
        <div>
            <IconTitleHeader
                headerType='h2'
                iconImage={require('../../images/Icon/icon_pie_chart_oruum_green.png')}
                iconHeight='24px'
                textColor='#34B199'
                betweenSpace='10px'
                text='포트폴리오'></IconTitleHeader>
        </div>
    )
}