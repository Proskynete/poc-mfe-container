import { useEffect, useState } from "react";
import { GlobalStore } from "redux-micro-frontend";
import { RolesAllowed } from "../routes/navigation";

interface UserInfo {
  id: number;
  name: string;
  role: RolesAllowed;
}

const useAuth = () => {
  const globalStore = GlobalStore.Get();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    if (!isAuthenticated) {
      globalStore.SubscribeToGlobalState("AuthApp", ({ AuthApp }) => {
        if (AuthApp.user) {
          setIsAuthenticated(true);
          setUserInfo(AuthApp.user);
        } else {
          setIsAuthenticated(false);
          setUserInfo(undefined);
        }
      });
    }
  }, [isAuthenticated, globalStore]);

  return { isAuthenticated, userInfo };
};

export { useAuth };
