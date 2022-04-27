import {Cats, CatsForm, Dogs, DogsForm} from './components'
import './App.css';

const App = () => {
  return (
    <div>
      <div className={'flex'}>
        <CatsForm/>
        <DogsForm/>
      </div>

      <hr/>

      <div className={'flex'}>
        <Cats/>
        <Dogs/>
      </div>
    </div>
  );
}

export default App;
