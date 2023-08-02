/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { PageTitle } from "../../../_cloner/layout/core";
import {
    checkUserRole,
    getUserRoles,
} from "../../../_cloner/helpers/reusableFunction";
import AccessDenied from "../../../_cloner/helpers/components/AccessDenied";
import ComplaintOrRequest from "../../modules/crm/components/ComplaintOrRequest";

const DashboardCrm: FC = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>
                {"داشبورد مدیریتی امور مشتریان"}
            </PageTitle>
            {checkUserRole(
                getUserRoles(),
                "TransLotteryWinnerDashboardStatistic"
            ) ? (
                <>
                    <div className="md:grid md:grid-cols-1 md:gap-4">
                        <div className="mt-2 mb-2 shadow-lg">
                            <ComplaintOrRequest />
                        </div>
                    </div>
                </>
            ) : (
                <AccessDenied />
            )}
        </>
    );
};
export { DashboardCrm };
