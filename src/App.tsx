import { Amplify } from 'aws-amplify';
import  { useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';


Amplify.configure(awsExports);

const App = () => {

  useEffect(() => {
    fetch('https://a17lfk040i.execute-api.us-east-1.amazonaws.com/staging/dashboard')
    // fetch('http://localhost:3001/dashboard')
      .then(response => response.json())
      .then(data => console.log(data));

  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div >
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <h1>My Todos App</h1>

          <br />
        </div>
      )}


    </Authenticator>
  );
}

export default App;
