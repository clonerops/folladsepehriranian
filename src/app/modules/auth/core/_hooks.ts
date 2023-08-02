import { useQuery } from "@tanstack/react-query";
import * as api from "./_requests";

const useGetCaptcha = () => {
    return useQuery(["captcha"], api.getCaptcha);
};


export { useGetCaptcha }