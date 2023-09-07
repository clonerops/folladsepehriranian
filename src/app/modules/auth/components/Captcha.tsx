import { FC, useEffect, useState } from "react";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
    useQueryClient,
} from "@tanstack/react-query";

interface IProps {
    captcha: string;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<any, unknown>>;
}

const Captcha: FC<IProps> = ({ captcha }) => {
    const queryClient = useQueryClient();
    const refetchData = () => {
        queryClient.invalidateQueries(["captcha"]);
    };

    const [captchaValue, setCaptchaValue] = useState<string>("");

    useEffect(() => {
        const getCaptchaIsOnMount = async () => {
            setCaptchaValue("data:image/jpeg;base64," + captcha);
        };
        getCaptchaIsOnMount();
        // eslint-disable-next-line
    }, [captcha]);

    return (
        <>
            <div className="recaptcha">
                <div className="recaptcha__content">
                    <img
                        id="imgCaptcha"
                        className=""
                        alt=""
                        src={captchaValue}
                        style={{ height: 46, width: 150 }}
                        onClick={refetchData}
                    />
                </div>
            </div>
        </>
    );
};

export default Captcha;
