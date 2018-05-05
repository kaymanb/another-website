import * as React from "react";
import styled from "styled-components";
import { Link } from "./Link";

const EMAIL: string = "<kaymanbrusse@gmail.com>";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const handleEmailClick = () => {
  // Use "unsafe" prefix to signify possible side effects / mutation
  // when interacting with the object (and ignore certain tslint rules)
  const unsafeDocument = document;
  const unsafeTextArea = unsafeDocument.createElement("textarea");
  unsafeTextArea.value = EMAIL;
  unsafeDocument.body.appendChild(unsafeTextArea);
  unsafeTextArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "success" : "failure";
    console.debug("Copy email was a " + msg);
  } catch (err) {
    console.debug("Copy email failed!");
  }
  unsafeDocument.body.removeChild(unsafeTextArea);
};

export const Title = () => (
  <Wrapper>
    Kayman Johannes Brusse
    <div onClick={handleEmailClick}>
      <Link>{EMAIL}</Link>
    </div>
  </Wrapper>
);
