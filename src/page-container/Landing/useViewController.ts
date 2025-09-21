import { getUsername } from "@/src/services/user";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useWebSocket } from "@/src/helpers";

const useViewController = () => {

    const { messages, sendMessage } = useWebSocket("ws://localhost:3000");

    // useEffect(() => {
    //     const ws = new WebSocket("ws://localhost:3000");
    //
    //     ws.onmessage = (event) => {
    //         const data = JSON.parse(event.data);
    //         setStats(data);
    //     };
    //
    //     return () => ws.close();
    // }, []);

    console.log(messages)

    const { data } = useQuery({
        queryKey: ["get-username"],
        queryFn: async () => {
            const res = await getUsername();
            return res.data?.data.username;
        },
    });

    return {
        username: data,
        stats: {},
    };
};

export default useViewController;
