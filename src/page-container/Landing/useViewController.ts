import { getUsername } from "@/src/services/user";
import { useQuery } from "@tanstack/react-query";

const useViewController = () => {
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
