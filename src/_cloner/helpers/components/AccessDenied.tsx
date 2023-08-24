import { toAbsoluteUrl } from "../AssetHelpers";

const AccessDenied = () => {
    return (
        <div className="tw-flex tw-justify-center tw-items-center tw-flex-col">
            <h2 className="tw-text-center tw-font-yekan_bold tw-text-3xl">
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
