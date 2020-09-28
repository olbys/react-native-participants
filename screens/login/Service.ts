import {useState} from "react";

export function useAuthentificationService() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const login = (identifiant: string, password: string): boolean => {
        const isAuthorized: boolean = (identifiant === 'admin' && password === "password");
        setIsAuthenticated(isAuthorized);
        return (isAuthorized);
    }
    return {login, isAuthenticated} as const;
}

export default useAuthentificationService;