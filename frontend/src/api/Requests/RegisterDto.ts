export default class RegisterDto
{
  username: string;
  password: string;
  email: string;

  constructor(usr: string, pwd: string, eml: string)
  {
    this.username = usr;
    this.password = pwd;
    this.email = eml;
  }
}