import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';
import { GET_API_DATA } from "./component/Landing.types";


let apiUrl = process.env.REACT_APP_API_BASE_URL;
console.log("apiUrl--",apiUrl);
const json    = '.json?print=pretty';

// worker Saga: will be fired on REQUEST_API_DATA actions
function* getApiData() {
    try {
      
      const response = yield call(axios.get, `${apiUrl}topstories${json}`);
      const data = yield all(response.data.slice(0,90).map((itemId, i) => call(axios.get, `${apiUrl}item/${itemId+json}`)));      
      yield put({
        type: GET_API_DATA, 
        articleList: data})
    
    } catch (error) {
      console.log(error)    
    }
  
}


export default function* mySaga() {
  yield takeLatest(GET_API_DATA, getApiData);
}
