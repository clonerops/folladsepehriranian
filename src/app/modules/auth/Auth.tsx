import { useState } from "react";
import { toAbsoluteUrl } from "../../../_cloner/helpers";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
    const [mode, setMode] = useState<boolean>(true);

    const handleMode = () => setMode((prev) => !prev);

    return (
        <>
            <div className="grid grid-cols-2 h-screen">
                <div className="flex flex-col justify-center gap-x-4">
                    <div className="flex justify-center items-center gap-x-4 mb-16">
                        <button
                            type="submit"
                            id="kt_sign_in_submit"
                            className={`btn px-8 ${mode && "bg-slate-200 text-black"}`}
                            onClick={handleMode}
                        >
                            ورود
                        </button>
                        <button
                            type="submit"
                            id="kt_sign_in_submit"
                            className={`btn ${!mode && "bg-slate-200 text-black"}`}
                            onClick={handleMode}
                        >
                            ثبت نام
                        </button>
                    </div>
                    {mode ? <Login /> : <Register />}
                </div>
                <div>
                    <div
                        className="h-full w-full flex flex-col"
                        style={{
                            backgroundImage: `url(${toAbsoluteUrl(
                                "/media/logos/auth-bg.png"
                            )})`,
                        }}
                    >
                        <div className="text-center mb-auto">
                            {/* <label className="text-white font-yekan_bold text-2xl my-8">
                                بازرگانی سپهر ایرانیان
                            </label> */}
                        </div>
                        <div className="flex justify-center items-center">
                            {/* <img
                                src={`${toAbsoluteUrl(
                                    "/media/logos/bazarganilogo.png"
                                )}`}
                                width={300}
                                height={300}
                                alt="Sepehr Logo"
                                className="mx-auto"
                            /> */}
                        </div>
                        <div className="mt-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
