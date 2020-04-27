import React, { useRef, useEffect } from "react";

interface Props {
  className: string;
}

const Chat = (props: Props) => {
  const sock = useRef<WebSocket>(new WebSocket(`ws://localhost:9000/catan/ws`));
  useEffect(() => {
    sock.current.onmessage = (e: MessageEvent) => console.log(e);
    return () => sock.current.close();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => sock.current.send("Boop"), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className={props.className} />;
};

export default Chat;
