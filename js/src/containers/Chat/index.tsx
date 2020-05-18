import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import { useMessageHandler, useWebsocket } from "utils/websocket";

import Button from "components/Input/Button";
import TextInput from "components/Input/TextInput";
import Form from "components/Form";

import styles from "./styles.scss";

interface Props {
  className: string;
}

const Chat = (props: Props) => {
  const { gameName } = useParams();
  const [chatLog, setChatLog] = useState<string[]>([]);

  const sock = useWebsocket(`ws://localhost:9000/catan/game/${gameName}/ws`);
  useMessageHandler(sock, (e: MessageEvent) => {
    setChatLog(state => [...state, e.data]);
  });

  const [message, setMessage] = useState("");

  return (
    <div className={classNames(props.className, styles.container)}>
      {/*
        This wrapper is required to get scrolling to "stick" to the bottom of
        the page. Taken from:
        https://stackoverflow.com/questions/18614301/keep-overflow-div-scrolled-to-bottom-unless-user-scrolls-up/18614561#comment79201655_44051405
        NOTE: Scrolling doesn't work in FireFox! See https://bugzilla.mozilla.org/show_bug.cgi?id=1042151
        */}
      <div className={styles.chatLogWrapper}>
        <div className={styles.chatLog}>
          {chatLog.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </div>
      </div>
      <div className={styles.chatBox}>
        <Form
          onSubmit={e => {
            message && sock.send(message);
            setMessage("");
          }}
        >
          <TextInput
            onChange={e => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Type here to chat..."
          />
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
