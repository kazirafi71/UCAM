import React from "react";
import Styles from "./AdminTitleComp.module.css";
import { BsPlus } from "react-icons/bs";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";

const AdminTitleComp = ({ title, btn_text, url }) => {
  const router = useRouter();
  return (
    <div className={Styles.adminTitle__style}>
      <h3>{title}</h3>
      {btn_text && (
        <button
          onClick={() => router.push(`${url}`)}
          className="commonBtn__style"
        >
          <AddIcon style={{ color: "white" }} />
          {btn_text}
        </button>
      )}
    </div>
  );
};

export default AdminTitleComp;
