import { createReducer } from "@ngrx/store";
import { studentsLoad } from "actions/student.actions";

export interface StudentState extends EntityState<Student[]>{

}

export const studentReducer=createReducer(initialState,
  on(studentsLoad,()=>{}))