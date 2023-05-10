export default class LogintDto
{
  username: string;
  password: string;

  constructor(usr: string, pwd: string)
  {
    this.username = usr;
    this.password = pwd;
  }
}