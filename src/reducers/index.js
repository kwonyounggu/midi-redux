import { combineReducers } from 'redux';

import midi from '../reducers/MIDIReducer';
import player from '../reducers/PlayerReducer';
import file from '../reducers/FileReducer';

const rootReducer = combineReducers({
  player,
  file,
  midi
});

export default rootReducer;
