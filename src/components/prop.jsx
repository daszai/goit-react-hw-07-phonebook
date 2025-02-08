import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const tasksInitialState = {
  contacts: [
    { name: 'hej', id: 1, number: 5454 },
    { name: 'he43j', id: 2, number: 543454 },
    { name: '4h43ej', id: 3, number: 54435254 },
    { name: 'STORE', id: 4, number: 454435254 },
  ],
  name: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState.contacts,
  reducers: {
    deletet(state, action) {
      let temp = state;
      const temp2 = temp.filter(obj => {
        if (action.payload === obj.name) {
          return false;
        }
        return true;
      });
      return temp2;
    },
    add(state, action) {
      let temp = state;
      temp.push({
        name: action.payload.name,
        id: nanoid(),
        number: action.payload.tel,
      });
    },
  },
});
const tasksSlice2 = createSlice({
  name: 'filter',
  initialState: tasksInitialState.name,
  reducers: {
    contactsFilters(state, action) {
      const temp = action.payload;
      return temp;
    },
  },
});
const tasksReducer = tasksSlice.reducer;
const tasksReducer2 = tasksSlice2.reducer;
export const { deletet, add } = tasksSlice.actions;
export const { contactsFilters } = tasksSlice2.actions;

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    name: tasksReducer2,
  },
});
