import { observer } from "mobx-react-lite";
import { Navigate, Outlet, ScrollRestoration } from "react-router-dom";
import { useStore } from "./app/stores/store";
import { useEffect } from "react";
import LoadingComponent from "./app/layout/LoadingComponent";

function App() {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded)
    return <LoadingComponent content="Loading app.." />;

  if (!commonStore.token && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div>
        <ScrollRestoration />
        <Outlet />
      </div>
    </>
  );
}

export default observer(App);
