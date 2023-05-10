// React
import { useState, useEffect} from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
// MUI
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import Paper from '@mui/material/Paper/Paper';
// Hooks / Functions / Context
import axios from '../../api/Axios';
import useAuth from '../../hooks/useAuth';
import { Authorization } from '../../context/AuthProvider';
// TSX Components
import LoginDto from '../../api/Requests/LoginDto';

const LOGIN_URL = 'User/auth';

const Login = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const DTO: LoginDto = new LoginDto(user, pwd);
      const response = await axios.post(LOGIN_URL,
        JSON.stringify(DTO),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
    );

    setUser('');
    setPwd('');
    const sub = response?.data?.sub;
    const token = response?.data?.token;
    const claims = response?.data?.claims;
    const auther = { sub, token, claims } as Authorization;
    setAuth(auther);
    document.cookie = `fid=${token}; path=/; secure; max-age=3600; SameSite=Lax`;
    navigate('/dashboard', { replace: true });
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  }

  return (
    auth ? <Navigate to='/main' state={{ from: location }} replace />
    : (
    <Box sx={{ margin: '15vh auto', maxWidth: '73vw' }} >
    { errMsg ?
    <LoginMember>
      <p aria-live="assertive">{errMsg}</p>
    </LoginMember>
    : <></>}
    <Paper elevation={4} sx={{ borderRadius: '4%' }}>
      <LoginStack sx={{ borderRadius: '3%' }}>
        <LoginMember>
          <LoginTitle>Login</LoginTitle>
        </LoginMember>

        <LoginMember>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: '68%' }}
              label='Username'
              id='username'
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              margin="dense"
              required
            />
            <TextField
              sx={{ width: '68%', paddingBottom: '8px' }}
              label='Password'
              id='password'
              type='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              margin='dense'
              required
            />
            <LoginButton variant='contained' fullWidth>Login</LoginButton>
          </form>
        </LoginMember>
        <LoginMember>
          <hr />
        </LoginMember>
        <LoginMember>
          <Typography sx={{ fontSize: '16px', margin: '4px'}}>
            Don't have an account?
          </Typography>
          <RegisterLink to="/register">Register!</RegisterLink>
        </LoginMember>
      </LoginStack>
    </Paper>
    </Box>)
  );
}

const LoginStack = styled(Stack)(() => ({
  border: '3px solid',
  borderColor: 'hsl(210,75%,1.6%)',
  minWidth: '60vw',
  maxWidth: '89vw',
}));

const LoginTitle = styled(Typography)(() => ({
  borderBottom: '1px solid',
  borderColor: 'hsl(211.3,74.2%,93.9%)',
  fontFamily: 'Comic-neue',
  fontSize: '3.5rem',
  fontWeight: 800
}));

const LoginMember = styled(Box)(() => ({
  textAlign: 'center',
  marginBottom: '9px'
}));

const LoginButton = styled(Button)(() => ({
  backgroundColor: '#4c69f6',
  fontFamily: 'Lato',
  fontSize: '1.25rem',
  fontWeight: '900',
  margin: '8px',
  width: '68%',
  '&:hover': {
    backgroundColor: '#143af3'
  }
}));

const RegisterLink = styled(Link)(() => ({
  color: '#143af3',
  fontSize: '1.15rem',
  fontWeight: 600
}));

export default Login;