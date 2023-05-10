// MUI
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// Assets
import Colors from '../../theme/Colors';
import { HeaderData } from '../../../assets/Data/Header.Data';
// MUI Icons

// Own
import NavBar from './NavBar';

const Header = ({ headerAssets }: { headerAssets: HeaderData }) => (
  <HeaderStyled position='sticky'>
    <Grid container columns={12} sx={{ display: 'flex', justifyContent: 'space-between' }} >
      <Grid xs={5} >
        <SiteIcon src={ headerAssets.images.logoSmall[0] }/>
      </Grid>
      <Grid xs={7}>
        <NavBar links={headerAssets.links}/>
      </Grid>
    </Grid>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled(AppBar)(() => ({
  backgroundColor: Colors.PaletteStandard.teal[600],
  position: 'sticky',
  width: '98.8vw'
}));

const SiteIcon = styled('img')(() => ({
  height: '64px',
  padding: '4px 8px',
  width: '64px'
}));