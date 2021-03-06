import {combineReducers} from 'redux';
import contactsReducer from './contacts';
import {reducer as formReducer} from 'redux-form';

export const rootReducer = combineReducers({
    contactStore: contactsReducer,
    form: formReducer
  }
);