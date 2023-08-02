/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { App } from "../App";
import Login from "../modules/auth/Login";

import Cookies from "js-cookie";

const { PUBLIC_URL } = process.env;

const AppRoutes: FC = () => {
    return (
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App />}>
                    <Route path="error/*" element={<ErrorsPage />} />
                    {Cookies.get('token') ? (
                        <>
                            <Route path="/*" element={<PrivateRoutes />} />
                            <Route
                                index
                                element={<Navigate to="/dashboard/esale" />}
                            />
                        </>
                    ) : (
                        <>
                            <Route path="auth/*" element={<Login />} />
                            <Route path="*" element={<Navigate to="/auth" />} />
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { AppRoutes };
