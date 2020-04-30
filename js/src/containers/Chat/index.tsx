import React, { useRef, useEffect } from "react";

import { useMessageHandler, useWebsocket } from "utils/websocket";

interface Props {
  className: string;
}

const Chat = (props: Props) => {
  const sock = useWebsocket(`ws://localhost:9000/catan/ws`);
  useMessageHandler(sock, (e: MessageEvent) => {
    console.log("CHAT", e);
  });

  useEffect(() => {
    const interval = setInterval(() => sock.send("Boop"), 3000);
    return () => clearInterval(interval);
  }, []);

  return <div className={props.className} />;
};

export default Chat;
