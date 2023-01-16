import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  value: "",
};

export const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { payload } = action;
      state.list.push({ name: payload, isDone: false });
    },
    deleteItem: (state, action) => {
      const { payload } = action;
      state.list = state.list.filter((item) => item.name !== payload);
    },
    compliteItem: (state, action) => {
      const { payload } = action;
      state.list = state.list.map((element) => {
        if (element.name === payload) {
          if (element.isDone) {
            return { ...element, isDone: false };
          } else {
            return { ...element, isDone: true };
          }
        } else {
          return element;
        }
      });
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addItem, deleteItem, compliteItem, setValue } =
  toDoSlice.actions;

export default toDoSlice.reducer;
