import { observer } from 'mobx-react-lite';
import SalesHistory from './SalesHistory';

export default observer(function SalesPage() {
    return (
        <div className="salespage-background">
          <SalesHistory />
        </div>
    );
});
