import axios from "axios";

export const GET_CURRENT_PRICE = "STOCK/GET_CURRENT_PRICE";
export const CHANGE_PLOT_PERIOD = "STOCK/CHANGE_PLOT_PERIOD";

export const changePricePlotPeriod = (period) => ({ type: CHANGE_PLOT_PERIOD, period });

const initialState = {
    // Stock profile
    ticker: 'AAPL',
    koreanName: '애플',
    englishName: 'Apple Inc.',

    //Price
    currency: '$',
    currentPrice: 132.12,
    plotPeriod: '1년',
    lastDailyChange: -2.69,
    lastDailyChangeRate: -1.66,

    //ORUUM contents
    tagList: ['스마트폰','전자','가상현실','플랫폼','IT'],
    buyPoints: ['아이폰이 스마트폰 시장에서 매우 독점적 위치를 차지하고 있어요!',
               '아이패드도 태블릿 시장에서 매우 강력한 독점적 위치!',
               '수익성이 정말 좋아요! 순이익률 27%로 동종업계 1위'],
    sellPoints: ['가격이 너무 비싸! 애플의 순이익 대비 주가는 지난 10년 중 최고!',
                 '애플이 이야기한 자동차 산업, 잘 되고 있는 걸까?',
                 '아이폰의 성장세 계속 이어질까?'],


};

export async function getCurrentPrice(tickerInput) {
  const request = await axios.get('http://3.38.30.153/api/stockpricehistory/'+tickerInput)
    .then(response => response.data)
  
  if (request.count > 0) {
    return {
      type: GET_CURRENT_PRICE,
      response: request,
      status: "success",
      ticker: tickerInput
    }
  }
}

const stock = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRICE:
      return {
        ...state,
        currentPrice: action.response.results[0].price_close,
      };
    case CHANGE_PLOT_PERIOD:
      return {
        ...state,
        plotPeriod: action.period,
      }
    default:
      return state;
  }
};

export default stock;