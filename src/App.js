import './static/css/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import Login from './pages/login';
import Navigation from './components/navigation';
import { RouterProvider } from 'react-router-dom';
import Routes from './routers';
import router from './routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;
