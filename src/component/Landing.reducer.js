import {GET_API_DATA, DELETE_API_DATA} from "./Landing.types"

const iState = {
    articleData:[]
}

const getArticleData = (state=iState, action)=>{
    switch (action.type) {
        case GET_API_DATA:
            return {
                ...state, 
                articleData: action.articleList,
                loader:action.loader,
            }
        case DELETE_API_DATA:
                let afterDelete = state.articleData.filter(article => article.data.id !== action.id)
                return {
                    articleData : afterDelete
                }      
        default:
            return state;
            
    }
}

export default getArticleData;