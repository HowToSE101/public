import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';

export default function App({children}) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Log in</Link>

      <button onClick={() => browserHistory.push('/login')}>Log in</button>
      <div>{children}</div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object
};
