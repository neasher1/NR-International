import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Router';

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
