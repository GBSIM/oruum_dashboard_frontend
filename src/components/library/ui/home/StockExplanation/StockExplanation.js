import IconTitleHeader from "../../unit/IconTitleHeader/IconTitleHeader"
import IconText from "../../unit/IconText/IconText"

export default function StockExplanation() {
    return (
        <div>
            <IconTitleHeader
                headerType='h2'
                iconImage={require('../../images/Icon/icon_bar_graph_oruum_green.png')}
                iconHeight='24px'
                textColor='#34B199'
                betweenSpace='10px'
                text='주식 데이터'></IconTitleHeader>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#696969'}}>주식 데이터에서는 미국과 한국의 모든 종목에 대한 정보를 관리해요.</span>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#696969'}}>크리에이터 분들은 ORUUM 데이터 서버가 자동으로 수집한 정보에 대해서 정보에 문제가 없는 지 확인해주세요!</span>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#696969'}}>ORUUM 데이터 서버가 자동으로 수집하는 데이터에는 다음과 같은 것들이 있어요.</span>
            <div style={{minHeight:'30px'}}></div>
            <IconTitleHeader
                headerType='h3'
                iconImage={require('../../images/Icon/icon_cycle_dark_grey.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text='ORUUM이 자동으로 수집하는 데이터'></IconTitleHeader>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>주가 정보</span>
            <div style={{minHeight:'10px'}}></div>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='매일의 종가, 시초가, 고가, 저가 등의 가격 정보와 거래량 정보를 자동으로 수집해요.'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>재무 정보</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='주식 회사들의 공시자료를 토대로 매출과 이익 등의 재무 정보를 자동 수집해요.'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>전문가 의견</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='해당 종목에 대한 전문가들의 매수, 매도 의견과 목표가를 자동 수집해요.'></IconText>
            <div style={{minHeight:'30px'}}></div>
            <span style={{color:'#696969'}}>자동으로 수집하기 어렵거나 전문가의 주관이 들어가야하는 정보는 크리에이터의 능력으로 컨텐츠를 만들어요.</span>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#696969'}}>ORUUM 크리에이터에 의해 만들어지는 컨텐츠는 아래와 같아요!</span>
            <div style={{minHeight:'30px'}}></div>
            <IconTitleHeader
                headerType='h3'
                iconImage={require('../../images/Icon/icon_file_plus_dark_grey.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='10px'
                text='ORUUM 크리에이터가 만드는 컨텐츠'></IconTitleHeader>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>태그</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='각 종목을 간단하게 표현할 수 있는 키워드를 태그로 등록해요.'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>매수 포인트</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='해당 종목의 긍적적인 전망을 토대로 매수 포인트를 작성해주세요.'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>매도 포인트</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='해당 종목의 부정적인 전망과 매수를 신중히 고려해야하는 이유를 작성해주세요.'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>제품</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='해당 종목의 제품군과 매출 비율, 전년 대비 성장률, 그리고 각 제품 별 태그를 추가해주세요.'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>제품 상세</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='해당 종목의 제품군 별로 상세 특징을 추가해주세요!'></IconText>
            <div style={{minHeight:'10px'}}></div>
            <span style={{color:'#34B199'}}>뉴스</span>
            <IconText
                iconImage={require('../../images/Icon/icon_check_box_oruum_green.png')}
                iconHeight='20px'
                textColor='#696969'
                betweenSpace='7px'
                text='해당 종목과 관련한 뉴스를 등록해주세요! '></IconText>
        </div>
    )
}