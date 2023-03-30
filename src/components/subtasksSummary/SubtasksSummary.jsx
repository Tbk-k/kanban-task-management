import React, { useEffect, useState } from "react";
import { StyledSubtaskSummary } from "./SubtaskSummary.styles";

const SubtasksSummary = ({ subtasks, isPreview }) => {
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setCompleted(subtasks?.filter((subtask) => subtask.completed).length);
  }, [subtasks]);
  return (
    <StyledSubtaskSummary>
      {isPreview ? (
        <p
          style={{ fontWeight: "bold" }}
        >{`Subtasks (${completed} od ${subtasks.length})`}</p>
      ) : (
        <p>{`${completed} of ${subtasks.length} subtasks`}</p>
      )}
    </StyledSubtaskSummary>
  );
};

export default SubtasksSummary;
