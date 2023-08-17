import ProfessionalSelect from "../../../_cloner/helpers/components/ProfessionalSelect";
import { Card6 } from "../../../_cloner/partials/content/cards/Card6";

const Order = () => {
    return (
        <>
            <Card6 title="" image="">
                <div className="flex flex-row gap-8">
                    <div className="w-50">
                        <ProfessionalSelect placeholder={"کالا / محصول"} />
                    </div>
                    <div className="w-50">
                        <ProfessionalSelect placeholder={"انبار"} />
                    </div>
                    <div className="w-50">
                        <ProfessionalSelect placeholder={"انبار"} />
                    </div>
                </div>
            </Card6>
        </>
    );
};

export default Order;
