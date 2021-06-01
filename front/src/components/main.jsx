import React from 'react';
import DataBases from '../pages/dataBases';
import Logs from '../pages/logs';
import Users from '../pages/users';
import Zero from '../pages/zero';

const Main = ({page}) => {
  let a = (<div></div>);
  if (page ==='dataBase' )
  {
    a= (<DataBases />)
  }
  if (page ==='users' )
  {
    a = (<Users />);
  }
  if (page ==='logs' )
  {
    a = (<Logs />);
  }
  if (page === '')
  {
    a = (<Zero />)
  }
  return (a);
}
 
export default Main;