import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './providers/AuthProviders/AuthProviders';
import router from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='m-2'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
  </div>
)
