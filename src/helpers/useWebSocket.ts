import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        const socket = new WebSocket(url);
        setWs(socket);

        socket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        return () => {
            socket.close();
        };
    }, [url]);

    const sendMessage = (message: any) => {
        if (ws) {
            ws.send(message);
        }
    };

    return { messages, sendMessage };
};

export default useWebSocket;
