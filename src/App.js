
import './App.scss';
import Header from './components/Header/header';
import { Link } from "react-router-dom";


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

  return (
    <div className="app-container">
      <Header />
      <div>
        Test Link
        <div>
          <button>
            <Link to="/users">Go to user page</Link> |{" "}


          </button>
          <button>
            <Link to="/admin">Go to admin page</Link>
          </button>
        </div>
      </div>
    </div>

  );
};

export default App;
