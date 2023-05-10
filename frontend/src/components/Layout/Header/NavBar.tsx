import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import Stack from '@mui/material/Stack/Stack';
import Box from '@mui/material/Box/Box';
import Divider from '@mui/material/Divider/Divider';

import { LinkData } from '../../../assets/data/Header.Data';

import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';

const NavBar = ({ links }: { links: Array<LinkData> }) => {
  return(
    <Stack direction={'column'}>
      <SessionBar direction={'row'} spacing={6} >
      { links[0].contents.map((e, i) => (
        <Stack key={`${i}-session`} sx={{ display: 'flex' }}>
          <SessionLinks to={e.to}>{e.text}</SessionLinks>
          <Divider orientation={'vertical'} />
        </Stack>
      ))}
      </SessionBar>
      <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-evenly' }} >
      { links[2].contents.map((e, i) => (
        <Box key={`${i}-nav-links`}>
          <HeaderLink to={e.to} >
            {e.text}
          </HeaderLink>
          <Divider orientation={'vertical'} />
        </Box>
      ))}
      </Stack>
    </Stack>
  );
}

export default NavBar;

const SessionBar = styled(Stack)(() => ({
  backgroundColor: Colors.PaletteStandard.purpleBlack[700],
  color: Colors.PaletteStandard.teal[200],
  padding: '0 9px',
  right: 0,
  width: '180px'
}));

const SessionLinks = styled(Link)(() => ({
  fontFamily: `${Fonts.UI[0]}, ${Fonts.UI[1]}`,
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '1.25rem',
  '$:hover': {
    color: Colors.PaletteStandard.teal[100]
  }
}));

const HeaderLink = styled(Link)(() => ({
  color: 'hsl(0,0%,10.2%)',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: 'hsla(215.6,49.5%,38%,0.95)',
    color: 'hsl(0,0%,94.9%)'
  }
}));