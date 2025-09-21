import { getUsername } from "@/src/services/user";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useViewController = () => {
    const [stats, setStats] = useState<any>({});
    const ws = new WebSocket("ws://localhost:3000");

    useEffect(() => {
        ws.onmessage = (event) => setStats(JSON.parse(event.data));

        return () => ws.close();
    }, [ws.onmessage]);

    console.log(stats)

    const { data } = useQuery({
        queryKey: ["get-username"],
        queryFn: async () => {
            const res = await getUsername();
            return res.data?.data.username;
        },
    });

    return {
        username: data,
        stats: stats.data,
    };
};

export default useViewController;
