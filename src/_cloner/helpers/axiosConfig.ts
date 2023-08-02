import axios from "axios";
import Cookies from "js-cookie";
import { getRefreshToken } from "./reusableFunction";

export const dashboardHttp = axios.create({
    baseURL: "https://transferapi.saipacorp.com/api/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
    },
});

export const http = axios.create({
    baseURL: "https://transferapi.saipacorp.com/",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
    },
});

dashboardHttp.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await dashboardHttp.post(
                    "https://transferapi.saipacorp.com/Users/refresh-token",
                    {
                        // Send your refresh token to the server for verification
                        refreshToken: getRefreshToken(),
                    }
                );
                // Update the access token in your storage or state
                const newAccessToken = response.data.jwtToken;
                // Retry the original request with the new access token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return dashboardHttp(originalRequest);
            } catch (error) {
                // Handle token refresh failure (e.g., logout user)
                // You can dispatch an action to logout the user or redirect to the login page
                Cookies.remove("token");
                window.location.reload();
            }
        }
        return Promise.reject(error);
    }
);
