import IconTitleHeader from "../../unit/IconTitleHeader/IconTitleHeader"

export default function HomeTitle () {
    return (
        <IconTitleHeader
            type='h1'
            iconImage={require('../../images/Icon/icon_study_light_black.png')}
            containerHeight='30px'
            iconHeight='30px'
            textColor='#333333'
            betweenSpace='10px'
            text='ORUUM 대쉬보드'></IconTitleHeader>
    )
}