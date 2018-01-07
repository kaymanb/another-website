import * as React from "react";
import styled from "styled-components";
import {
  TiSocialGithubCircular,
  TiSocialInstagram,
  TiDocumentText,
  TiSocialAtCircular
} from "react-icons/lib/ti";
import { Link } from "./Link";

// This is literally the only part of antd we want, and
// rather than ejecting from create-react-app to add the
// modular babel plugin, we just do the import ourselves.
const message = require("antd/lib/message");
require("antd/lib/message/style/css");

const ICON_SIZE: number = 25;
const EMAIL: string = "<kaymanbrusse@gmail.com>";

const handleEmailClick = () => {
  // Use "unsafe" prefix to signify possible side effects / mutation
  // when interacting with the object (and ignore certain tslint rules)
  const unsafeDocument = document;
  const unsafeTextArea = unsafeDocument.createElement("textarea");
  unsafeTextArea.value = EMAIL;
  unsafeDocument.body.appendChild(unsafeTextArea);
  unsafeTextArea.select();

  const unsafeMessage = message;
  try {
    const successful = document.execCommand("copy");
    if (!successful) {
      unsafeMessage.error("Failed to copy " + EMAIL + " to clipboard.");
    }
    unsafeMessage.success("Copied " + EMAIL + " to clipboard!");
  } catch (err) {
    unsafeMessage.error("Failed to copy " + EMAIL + " to clipboard.");
  }
  unsafeDocument.body.removeChild(unsafeTextArea);
};

const Wrapper = styled.div`
  text-align: left;
  margin-top: 1em;
`;

export const Social = () => {
  return (
    <Wrapper>
      <Link url="https://github.com/kaymanb" color="darkBlue">
        <TiSocialGithubCircular size={ICON_SIZE} />
      </Link>{" "}
      <Link url="kayman_brusse_resume_2018.pdf" color="yellow">
        <TiDocumentText size={ICON_SIZE} />
      </Link>{" "}
      <span onClick={handleEmailClick}>
        <Link color="red">
          <TiSocialAtCircular size={ICON_SIZE} />
        </Link>{" "}
      </span>
      <Link url="https://instagram.com/kaymnb" color="green">
        <TiSocialInstagram size={ICON_SIZE} />
      </Link>
    </Wrapper>
  );
};
