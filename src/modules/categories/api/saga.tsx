import {call, put, takeEvery} from 'redux-saga/effects';
import {setData, setLoading} from './slice';

function* fetchCategoriesApiData(): any {
  try {
    yield put(setLoading());
    const data = yield call(fetchCategoriesApiData);
    yield put(setData(data));
  } catch (error: any) {
    yield put(error.message);
  }
}

export function* categoriesSaga() {
  yield takeEvery('GET_CATEGORIES', fetchCategoriesApiData);
}
