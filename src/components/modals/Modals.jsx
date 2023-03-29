import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "../backdrop/Backdrop";
import MobileMenu from "../mobileMenu/MobileMenu";
import AddNewBoard from "../addNewBoard/AddNewBoard";
import TaskForm from "../taskForm/TaskForm";

const Modals = () => {
  const { boardMenu, addNewBoard, addNewTask } = useSelector(
    (state) => state.modalSlice
  );

  return (
    <>
      {boardMenu && (
        <>
          <Backdrop />
          <MobileMenu />
        </>
      )}
      {addNewBoard && (
        <>
          <Backdrop />
          <AddNewBoard />
        </>
      )}
      <>
        {addNewTask && (
          <>
            <Backdrop />
            <TaskForm />
          </>
        )}
      </>
    </>
  );
};

export default Modals;
