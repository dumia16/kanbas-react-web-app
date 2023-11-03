import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "1",
    title: "New Assignment",
    course: "2",
    description: "New Description",
    due: "2023-11-15",
    availableFromDate: "2023-11-01",
    availableUntilDate: "2023-11-14",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      // console.log(1);
      // console.log(state.assignments);
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
      // console.log(2);
      // console.log(state.assignments);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
    selectAssignment: (state, action) => {
      const foundAssignment = state.assignments.find(
        (assignment) => assignment._id === action.payload
      );
      if (foundAssignment) {
        state.assignment = foundAssignment;
      } else {
        state.assignment = {};
      }
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  selectAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
