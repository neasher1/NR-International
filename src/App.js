import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
