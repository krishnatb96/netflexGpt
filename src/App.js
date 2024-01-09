
import { Provider } from 'react-redux';
import Body from './Components/Body';
import appStore from './utils/AppStore';

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
      <Body />
      </Provider>
  
      
    </div>
  );
}

export default App;
