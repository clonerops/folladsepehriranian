const checkUserRole = (roles: any, role: string) => {
    let userIsAccess = roles?.includes(role) || roles?.includes("TransSuperAdmin") || roles?.includes("TransAdmin")
    return userIsAccess
}

const getUserRoles = () => {
    const retrievedItem: string | null = localStorage.getItem('auth');
    const retrievedObject: any = retrievedItem ? JSON.parse(retrievedItem) : null;
    return retrievedObject?.userRoles
}

const getRefreshToken = () => {
    const retrievedItem: string | null = localStorage.getItem('auth');
    const retrievedObject: any = retrievedItem ? JSON.parse(retrievedItem) : null;
    return retrievedObject?.refreshToken
}

export { checkUserRole, getUserRoles, getRefreshToken }