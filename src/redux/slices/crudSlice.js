import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      title: "Navbar",
      author: "Alex",
      assigned_to: "Ali",
      end_date: "1212-12-12",
      id: "400840aa-e73e-4544-aa64-93827b4a7e82",
    },
    {
      title: "Footer",
      author: "Aisa",
      assigned_to: "Maria",
      end_date: "3233-02-23",
      id: "0789a975-c4ac-43ac-af5d-42f17b708911",
    },
    {
      title: "Home",
      author: "Ahmet",
      assigned_to: "Moustafa",
      end_date: "1243-12-12",
      id: "2777f9cd-6407-4584-9dcb-b1d6abd0835a",
    },
  ],
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      payload.id = v4();

      state.tasks.push(payload);
    },

    deleteTask: (state, { payload }) => {
      const index = state.tasks.findIndex((i) => i.id === payload);

      state.tasks.splice(index, 1);
    },

    editTask: (state, { payload }) => {
      const index = state.tasks.findIndex((i) => i.id === payload.id);
      state.tasks.splice(index, 1, payload);
    },
  },
});

export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;
