import { toAbsoluteUrl } from "../AssetHelpers";

const AccessDenied = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h2 className="text-center font-yekan_bold text-3xl">
                شما به محتوای این صفحه دسترسی ندارید!
            </h2>
            <img
                src={toAbsoluteUrl("/media/logos/access.png")}
                width={300}
                height={300}
            />
        </div>
    );
};

export default AccessDenied;
