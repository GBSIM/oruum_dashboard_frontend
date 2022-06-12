export const DASHBOARD = "PAGE/DASHBOARD";
export const STOCKPAGE = "PAGE/STOCKPAGE";
export const ECONOMYPAGE = "PAGE/ECONOMYPAGE";
export const INDUSTRYPAGE = "PAGE/INDUSTRYPAGE";
export const PORTFOLIOPAGE = "PAGE/PORTFOLIOPAGE";
export const SIMULATIONPAGE = "PAGE/SIMULATIONPAGE";

export const CHANGE_PAGE = "PAGE/CHANGE_PAGE";

export const changePage = (nextPage) => ({type: CHANGE_PAGE, page:nextPage});

const initialState = {
  page: "대쉬보드 홈"
};

const pager = (state = initialState, action) => {
  switch (action.type) {    
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      }
    default:
      return state;
  }
};

export default pager;