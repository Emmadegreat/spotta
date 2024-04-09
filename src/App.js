import './static/css/index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
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
