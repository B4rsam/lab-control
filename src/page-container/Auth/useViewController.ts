import { useMutation } from "@tanstack/react-query";
import { authLogin } from "@/src/services/auth";
import { useRef } from "react";
import { ILoginRequest } from "@/src/services/auth/auth.props";

const useViewController = () => {
    const { mutateAsync } = useMutation({ mutationFn: authLogin });
    const fields = useRef<Partial<ILoginRequest>>({
        username: undefined,
        password: undefined,
    });
    const onChange = (event: any) => {
        const name: string = event.target.name;
        const value: any = event.target.value;

        switch (name) {
            case "username":
                fields.current.username = value;
                break;
            case "password":
                fields.current.password = value;
                break;
            default:
                console.log("invalid input");
                break;
        }
        return;
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        if (!fields.current.username || !fields.current.password) return;

        mutateAsync(fields.current as ILoginRequest)
            .then(() => {
                alert("Login successful");
                return;
            })
            .catch((err) => {
                alert(err.message);
                return;
            });
        return;
    };

    return { onSubmit, onChange };
};

export default useViewController;
