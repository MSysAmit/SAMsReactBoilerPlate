import { LOGIN_REQUEST, LOGIN_ERROR } from './constants';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import auth from './auth/auth';


function* loginFlow({ email, password }) {
  try {
    const response = yield call(auth.login, email, password);
    console.log('I am getting response from API', response);
    if (response) {
      yield put({ type: 'LOGIN_SUCCESS', response });
      yield put(push('/admin/orgs'));
    } 
  } catch (error) {
    yield put({ type: 'LOGIN_ERROR', error });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  console.log('I am in saga');
  const second = yield takeLatest(LOGIN_REQUEST, loginFlow);
  console.log('second', second);
}

