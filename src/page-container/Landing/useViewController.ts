import { getUsername } from "@/src/services/user";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useViewController = () => {
    const [stats, setStats] = useState<any>({});

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:3000");
        ws.onmessage = (event) => console.log(JSON.parse(event.data));

        return () => ws.close();
    }, []);

    const { data } = useQuery({
        queryKey: ["get-username"],
        queryFn: async () => {
            const res = await getUsername();
            return res.data?.data.username;
        },
    });

    return {
        username: data,
    };
};

export default useViewController;
