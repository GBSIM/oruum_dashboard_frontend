import HomeMenuTitle from "../HomeMenuTitle/HomeMenuTitle"
import HomeContentsTitle from "../HomeContentsTitle/HomeContentsTitle"
import HomeContentsText from "../HomeContentsText/HomeContentsText"
import TextWithVerticalBar from "../../unit/TextWithVerticalBar/TextWithVerticalBar"

export default function HomeMenuStockExplanation() {
    return (
        <div>
            <HomeMenuTitle title='주식 데이터'></HomeMenuTitle>
            <HomeContentsText text='주식 데이터에서는 미국과 한국의 모든 종목에 대한 정보를 관리해요.'></HomeContentsText>
            <HomeContentsText text='크리에이터 분들은 ORUUM 데이터 서버가 자동으로 수집한 정보에 대해서 정보에 문제가 없는 지 확인해주세요!'></HomeContentsText>
            <HomeContentsText text='ORUUM 데이터 서버가 자동으로 수집하는 데이터에는 다음과 같은 것들이 있어요.'></HomeContentsText>
            <div style={{minHeight:'30px'}}></div>
            
            <HomeContentsTitle title='ORUUM이 자동으로 수집하는 데이터'></HomeContentsTitle>
            <TextWithVerticalBar 
                textType='span' 
                leftText='주가 정보' 
                rightText='매일의 종가, 시초가, 고가, 저가 등의 가격 정보와 거래량 정보를 자동으로 수집해요.'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='재무 정보' 
                rightText='주식 회사들의 공시자료를 토대로 매출과 이익 등의 재무 정보를 자동 수집해요.'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='전문가 의견' 
                rightText='해당 종목에 대한 전문가들의 매수, 매도 의견과 목표가를 자동 수집해요.'></TextWithVerticalBar>
            <div style={{minHeight:'20px'}}></div>
            <HomeContentsText text='자동으로 수집하기 어렵거나 전문가의 주관이 들어가야하는 정보는 크리에이터의 능력으로 컨텐츠를 만들어요.'></HomeContentsText>
            <HomeContentsText text='ORUUM 크리에이터에 의해 만들어지는 컨텐츠는 아래와 같아요!'></HomeContentsText>

            <div style={{minHeight:'30px'}}></div>
            <HomeContentsTitle title='ORUUM 크리에이터가 만드는 컨텐츠'></HomeContentsTitle>
            <TextWithVerticalBar 
                textType='span' 
                leftText='태그' 
                rightText='각 종목을 간단하게 표현할 수 있는 키워드를 태그로 등록해요.'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='매수 포인트' 
                rightText='해당 종목의 긍적적인 전망을 토대로 매수 포인트를 작성해주세요.'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='매도 포인트' 
                rightText='해당 종목의 부정적인 전망과 매수를 신중히 고려해야하는 이유를 작성해주세요.'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='재품' 
                rightText='해당 종목의 제품군과 매출 비율, 전년 대비 성장률, 그리고 각 제품 별 태그를 추가해주세요.'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='재품 상세' 
                rightText='해당 종목의 제품군 별로 상세 특징을 추가해주세요!'></TextWithVerticalBar>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar 
                textType='span' 
                leftText='뉴스' 
                rightText='해당 종목과 관련한 뉴스를 등록해주세요! '></TextWithVerticalBar>            
        </div>
    )
}