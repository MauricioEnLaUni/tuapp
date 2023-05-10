import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// MUI
import CircularProgress from '@mui/material/CircularProgress';

import './index.css';

// Own
import App from './App.tsx';
import { AuthProvider } from './context/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<CircularProgress sx={{ display: 'flex', margin: '38vh auto', placeItems: 'center', minWidth: '72px' }}/>}>
          <Routes>
              <Route path="/*" element={<App />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
