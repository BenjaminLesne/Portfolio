import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import "./EmailButton.css";
import Email from "../../../assets/logos/contact/Email"

type Props = {
  email: string
}
export const EmailButton = ({ email  }: Props) => {
  const [visibility, setVisibility] = useState("hidden");

  async function handleCopyToClipBoard(string: string) {
    //add to clipboard
    navigator.clipboard.writeText(string);

    //trigger success icon animation
    setVisibility("hidden");
    setTimeout(() => {
      setVisibility("visible");
    }, 0);
  }

  return (
    <CSSTransition
      in={visibility === "visible"}
      classNames="success-copy"
      timeout={2000}
    >
      <button
        className={`ContactMe__link ContactMe__link--email`}
        onClick={() => handleCopyToClipBoard(email)}
      >
        <Email />
      </button>
    </CSSTransition>
  );
};