import logo from './logo.svg';
import './App.css';
import HeadingComponent from './Heading';
import SubHeadingComponent from './SubHeading';
import CarComponent from './CarComponent';
import SongComponent from './SongComponent';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {

  //initialize my variables
  let headingText = 'This is my heading from our app.js file';
  let numberValue = 200;
  let car = {
    model: 'Corolla LG',
    make: 'Toyota',
    year: '2010',
    type: 'Sedan'

  }
  let favoriteSong = {
    artist: 'The Script',
    title: 'Superheroes',
    genre: 'Pop',
    year: 2014,
    youtube:'https://www.youtube.com/watch?v=WIm1GgfRz6M'

  }
  
  //initialize my functions
  const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
  };
//render  my JSX
  return (
  <div>
    {/* <HeadingComponent  h1Text={headingText} textToLog={'this is some text to console'}/> */}
    {/* <SubHeadingComponent h2Text={numberValue}/> */}
    {/* <CarComponent vehicle={car}/> */}
    <SongComponent song={favoriteSong}/>
    
    {/* <h3>What is the  sum of  55 and 34? {addTwoNumbers(55,34)}</h3> */}
    </div>
    );
};



export default App;
