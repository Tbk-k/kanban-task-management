import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "../backdrop/Backdrop";
import MobileMenu from "../mobileMenu/MobileMenu";
import TaskForm from "../taskForm/TaskForm";
import TaskPreview from "../taskPreview/TaskPreview";
import BoardForm from "../boardForm/BoardForm";
import DeletionWarning from "../deletionWarning/DeletionWarning";

const Modals = () => {
  const { boardMenu, addNewBoard, addNewTask, taskPreview, deletionWarning } =
    useSelector((state) => state.modalSlice);

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
          <BoardForm />
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
      <>
        {deletionWarning && (
          <>
            <Backdrop />
            <DeletionWarning />
          </>
        )}
      </>
    </>
  );
};

export default Modals;
