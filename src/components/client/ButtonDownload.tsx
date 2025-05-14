"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "../ui/button";

export const ButtonDownload = ({
  className = "",
  text = "",
}: {
  className?: string;
  text?: string;
}) => {
  return (
    <Button
      className={className}
      onClick={() =>
        window.open("/assets/cv/Nguyen-Xuan-Quyet-Fe-DW.pdf", "_blank")
      }
    >
      {text}
      <FiDownload />
    </Button>
  );
};
