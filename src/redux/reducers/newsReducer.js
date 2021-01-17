const SET_NEWS = 'AppNews/newsReducer/SET_NEWS';

const initialState = {
  news: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.news,
      };
    default:
      return state;
  }
};

export const getNews = () => {
    const response = [];
    for (let i=0;i<20;i++){
      response.push({
        id:i,
        title:`New${i}`,
        description:`New${i} description description`,
      })
    }
      return ({type: SET_NEWS, news: response});
};

