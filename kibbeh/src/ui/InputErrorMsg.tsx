import React from "react";

interface InputErrorMsgProps {}

// @todo verify with designer what color this should be
export const InputErrorMsg: React.FC<InputErrorMsgProps> = ({ children }) => {
  return <div className={`text-secondary`}>{children}</div>;
};
