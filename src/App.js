import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Routers/Routers';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
