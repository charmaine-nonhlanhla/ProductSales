import "./NavigationBar.css";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function NavigationBar() {
  const {
    userStore: { user },
  } = useStore();

  return (
    <div className="navigation-container">
      <div className="navigation-content">
        <div className="navigation-menu"></div>
        <div className="username-display">
          <span className="username-text">{user?.username}</span>
        </div>
      </div>
    </div>
  );
});
