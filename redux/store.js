// 导入Redux Toolkit中的configureStore和createSlice方法
import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    data: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data -= action.payload;
    },
  },
});
const changeDataSlice = createSlice({
  name: "changeData",
  initialState: {
    data: "我是changeData",
  },
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload;
    },
  },
});
const allReducers = combineReducers({
  count: countSlice.reducer,
  changeData: changeDataSlice.reducer,
});
const store = configureStore({
  reducer: allReducers,
});

store.dispatch({ type: "count/increment", payload: 10 });
console.log(store.getState());
debugger;
