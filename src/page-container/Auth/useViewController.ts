import { useMutation } from "@tanstack/react-query";
import { authLogin } from "@/src/services/auth";

const useViewController = () => {
    const { mutateFn } = useMutation({ mutationFn: authLogin });

    return {};
};

export default useViewController;
