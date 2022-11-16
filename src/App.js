import React, {useState} from 'react';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';


function App() {
  const [state, setState] = useState(true);

  return (
    <section>
      <button>{state ? 'SignUp' : 'SignIn'}</button>
    {state ? <SignInForm /> : <SignUpForm />}
    </section>
  );
}

export default App;
