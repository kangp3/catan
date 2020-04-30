import { useEffect, useRef } from "react";

import { v4 as uuid } from "uuid";

interface SocketMap {
  [url: string]: {
    socket: WebSocket;
    listeners: {
      [listenerId: string]: boolean;
    };
  };
}

const sockets: SocketMap = {};

export const useWebsocket = (url: string): WebSocket => {
  // Generate an ID for the new listener
  const listenerId = useRef<string>(uuid());

  // Open the socket if none exists for the URL
  if (!sockets.hasOwnProperty(url)) {
    sockets[url] = {
      socket: new WebSocket(url),
      listeners: {},
    };
  }
  // Register the component's listener on the socket
  sockets[url].listeners[listenerId.current] = true;

  useEffect(() => {
    // Clean up the listener and close connection to the socket
    return () => {
      delete sockets[url].listeners[listenerId.current];
      if (Object.keys(sockets[url].listeners).length === 0) {
        sockets[url].socket.close();
        delete sockets[url];
      }
    };
  }, []);

  return sockets[url].socket;
};

export const useMessageHandler = (
  socket: WebSocket,
  handler: (arg0: MessageEvent) => void
) => {
  useEffect(() => {
    const wrapped = (e: MessageEvent) => {
      handler(e);
    };
    socket.addEventListener("message", wrapped);
    return () => socket.removeEventListener("message", wrapped);
  }, []);
};
