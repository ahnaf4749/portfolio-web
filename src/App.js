import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { ThemContext } from './Components/Context/ThemProvider';
import { router } from './Components/router/Router';

function App() {
  const { theme } = useContext(ThemContext)
  return (
    <div className='max-w-screen-xl mx-auto' id={theme ? 'dark' : 'light'}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
