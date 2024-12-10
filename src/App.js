import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';


// class App extends React.Component {
//   render() {
//     return (
//       <div className='app-container'>
//         Hello World Với Tống Ngọc Khánh
//         <MyComponent></MyComponent>
//       </div>
//     );
//   }
// }
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App-container">
      Hello world
    </div>

  );
}

export default App;
