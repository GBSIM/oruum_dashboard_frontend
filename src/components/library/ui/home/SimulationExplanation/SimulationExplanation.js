import IconTitleHeader from "../../unit/IconTitleHeader/IconTitleHeader"
import IconText from "../../unit/IconText/IconText"

export default function SimulationExplanation() {
    return (
        <div>
            <IconTitleHeader
                headerType='h2'
                iconImage={require('../../images/Icon/icon_calculation_oruum_green.png')}
                iconHeight='24px'
                textColor='#34B199'
                betweenSpace='10px'
                text='시뮬레이션'></IconTitleHeader>
        </div>
    )
}