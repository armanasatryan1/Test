import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';

import store from './store/store';
import { Provider } from 'react-redux';

import ThankYou from './pages/ThankYou/ThankYou';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/" element={<Navigate exact from="/" to="/sign-up" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
