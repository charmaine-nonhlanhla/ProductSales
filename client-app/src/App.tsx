import { observer } from 'mobx-react-lite';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {



  return (
     <>
     <div>
     <Outlet />
     </div>
     </>
  );
}

export default observer(App);
