import { toast } from "react-toastify"

export const ToastComponent = (message: string) => {
    return toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })

}