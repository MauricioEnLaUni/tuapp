// React
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { CheckCircle, Close, Info } from '@mui/icons-material';
import Paper from '@mui/material/Paper/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import styled from '@emotion/styled';

// Custom
import axios from '../../api/axios';
import RegisterDto from '../../api/Requests/RegisterDto';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EML_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const REGISTER_URL = '/register';

const Register = () => {
    // Username manager
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    // Password
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // Password confirmation
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // Email
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    // Page refreshers, keep the displayed information up to date with the
    // application's state.
    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    useEffect(() => {
        setValidEmail(EML_REGEX.test(email));
    }, [email])

    // Submit function.
    // Reviews the state of the validation, then calls the server to create a
    // new account.
    // Reponses:
    // 200: Account created => Sends user to login.
    // 408: Timeout <= Need a cancellation token.
    // 409: Username unavailable.
    // 500: No server response.
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EML_REGEX.test(email);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Bad Request");
            return;
        }
        const DTO = new RegisterDto(user, pwd, email);
        try {
            await axios.post(REGISTER_URL,
                JSON.stringify(DTO),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setUser('');
            setPwd('');
            setMatchPwd('');
            setEmail('');
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        }
    }

    return (
    <Box sx={{ margin: '5vh auto', maxWidth: '73vw' }} >
        { errMsg ?
            <LoginMember>
                <p aria-live="assertive">{errMsg}</p>
            </LoginMember>
            : <></>
        }
        <Paper elevation={4} sx={{ borderRadius: '4%' }}>
            
            <LoginStack sx={{ borderRadius: '3%' }}>
                <LoginMember>
                    <LoginTitle>Register</LoginTitle>
                </LoginMember>

                <form onSubmit={handleSubmit}>
                <LoginMember>
                    <TextField
                        label='Username'
                        type='text'
                        id='username'
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        aria-invalid={validName ? 'false' : 'true'}
                        aria-describedby='uidnote'
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        InputProps={{
                            endAdornment:
                            <InputAdornment position='end'>
                                { validName ? <CheckCircle /> : userFocus ? <Close /> : <></> }
                            </InputAdornment>
                        }}
                        margin='dense'
                        sx={{ width: '68%' }}
                    />
                    { userFocus && user && !validName ? 
                        <Typography id='uidnote'>
                            <Info />
                            4 a 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, dash and lowdash allowed.
                        </Typography> : <></>
                    }
                </LoginMember>



                <LoginMember>
                    <TextField
                        label='Password'
                        id='password'
                        type='password'
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        InputProps={{
                            endAdornment:
                            <InputAdornment position='end'>
                                { validPwd ? <CheckCircle /> : pwdFocus ? <Close /> : <></> }
                            </InputAdornment>
                        }}
                        sx={{ width: '68%' }}
                    />
                    { pwdFocus && pwd && !validPwd ? 
                        <Typography id="pwdnote">
                            <Info />
                            8 to 24 characters.<br />
                            Must contain an uppercase, a lowercase, a number and a special character.<br />
                            Allowed characters: <span aria-label="exclamation">!</span> <span aria-label="at sign">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </Typography> : <></>
                    }
                </LoginMember>



                <LoginMember>
                    <TextField
                        label='Repeat Password'
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        InputProps={{
                            endAdornment:
                            <InputAdornment position='end'>
                                { validMatch && matchPwd ? <CheckCircle /> : matchFocus ? <Close /> : <></> }
                            </InputAdornment>
                        }}
                        sx={{ width: '68%' }}
                    />
                    { matchFocus && matchPwd && !validMatch ? 
                        <Typography id="confirmnote">
                            <Info />
                            Passwords must match.
                        </Typography> : <></>
                    }
                </LoginMember>


                
                <LoginMember>
                    <TextField
                        label='Email'
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        sx={{ width: '68%' }}
                        InputProps={{
                            endAdornment:
                            <InputAdornment position='end'>
                                { validEmail ? <CheckCircle /> : emailFocus ? <Close /> : <></> }
                            </InputAdornment>
                        }}
                    />
                    { emailFocus && email && !validEmail ? 
                        <Typography id="emailnote">
                            <Info />
                            Email must contain an at sign.<br />
                            Email must contain at least one dot after the at sign.<br />
                        </Typography> : <></>
                    }
                </LoginMember>

                <LoginMember>
                    <LoginButton disabled={!validName || !validPwd || !validEmail
                        || !validMatch ? true : false
                    }>Register</LoginButton>
                </LoginMember>
            </form>
            <LoginMember>
                <hr />
            </LoginMember>
            <LoginMember>
                <p>
                    Already registered?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <RegisterLink to="/">Log in</RegisterLink>
                    </span>
                </p>
            </LoginMember>
            </LoginStack>
        </Paper>
    </Box>
    )
}

export default Register;

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