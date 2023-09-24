import { toAbsoluteUrl } from "../AssetHelpers";

type Props = {
    title: string
    image: string
}

const PageTitle = (props: Props) => {
    const { title, image } = props;
    return (
        <div className="tw-flex tw-gap-x-4 tw-font-bold tw-text-2xl tw-py-4">
            <img
                src={toAbsoluteUrl(image)}
            />
            <span>{title}</span>
        </div>
    );
};

export default PageTitle;
