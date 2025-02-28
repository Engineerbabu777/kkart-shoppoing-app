import { call, put, takeEvery } from 'redux-saga/effects';
import { setData, setLoading, setError } from './slice'; // Import setError action
import { fetchCategories } from './api';

function* fetchCategoriesApiData(): any {
  try {
    yield put(setLoading()); // Set loading state to true

    const data = yield call(fetchCategories); // Fetch categories from API

    yield put(setData(data)); // Store data in Redux
    // yield put(setLoading()); // Set loading state to false
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    yield put(setError(error.message)); // Dispatch error action
    // yield put(setLoading()); // Ensure loading state is cleared on error
  }
}

export function* categoriesSaga() {
  yield takeEvery('GET_CATEGORIES', fetchCategoriesApiData);
}
