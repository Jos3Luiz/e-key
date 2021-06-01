import React from 'react';

import Logs from '../pages/logs';
import Whitelist from '../pages/whitelist';
import Zero from '../pages/zero';

const Main = ({page}) => {
  let a = (<div></div>);
  if (page ==='Whitelist' )
  {
    a = (<Whitelist />);
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