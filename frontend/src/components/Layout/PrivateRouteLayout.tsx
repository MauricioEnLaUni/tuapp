// React
import { Outlet } from 'react-router-dom';
// MUI
import Stack from '@mui/material/Stack/Stack';
// Own
import Header from './Header/Header.component';
import Footer from './Footer/Footer';

const GeneralLayout = ({ assets }: { assets: any }) => (
  <Stack className='LoggedApp'>
    <Header headerAssets={ assets } />
    <Outlet />
    <Footer />
  </Stack>
);

export default GeneralLayout;