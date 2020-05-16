import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useMessageHandler, useWebsocket } from "utils/websocket";

import Button from "components/Input/Button";
import TextInput from "components/Input/TextInput";
import Form from "components/Form";

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
    <div className={props.className}>
      {chatLog.map((msg, idx) => (
        <div key={idx}>{msg}</div>
      ))}
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
  );
};

export default Chat;
