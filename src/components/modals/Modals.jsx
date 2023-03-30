import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "../backdrop/Backdrop";
import MobileMenu from "../mobileMenu/MobileMenu";
import AddNewBoard from "../addNewBoard/AddNewBoard";
import TaskForm from "../taskForm/TaskForm";
import TaskPreview from "../taskPreview/TaskPreview";

const Modals = () => {
  const { boardMenu, addNewBoard, addNewTask, taskPreview } = useSelector(
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
      <>
        {taskPreview && (
          <>
            <Backdrop />
            <TaskPreview />
          </>
        )}
      </>
    </>
  );
};

export default Modals;
