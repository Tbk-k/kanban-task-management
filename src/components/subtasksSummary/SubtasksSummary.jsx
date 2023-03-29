import React, { useEffect, useState } from "react";
import { StyledSubtaskSummary } from "./SubtaskSummary.styles";

const SubtasksSummary = ({ subtasks }) => {
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setCompleted(subtasks.filter((subtask) => subtask.completed).length);
  }, [subtasks]);
  return (
    <StyledSubtaskSummary>
      <p>{`${completed} of ${subtasks.length} subtasks`}</p>
    </StyledSubtaskSummary>
  );
};

export default SubtasksSummary;
