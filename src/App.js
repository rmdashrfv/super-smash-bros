import './App.css';
import Fighter from './components/Fighter';

function App() {
  return (
    <div className="App">
     <h1>Fighters</h1>
     <div className="fighters-grid">
       <Fighter name={'Roy'} color={'red'} />
       <Fighter name={'Fox'} color={'green'} />
       <Fighter name={'Ganondorf'} color={'purple'} />
       <Fighter name={'Sheik'} color={'lightskyblue'} />
     </div>
     <div className="fighter-screen">
       <h2>Roy</h2>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png" />
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptatem pariatur. Quos quasi repudiandae, maxime reiciendis labore cupiditate, eligendi similique ratione, dolor est excepturi recusandae voluptas odio ipsam reprehenderit debitis!
       </p>
     </div>
    </div>
  );
}

// const Fighter = {name: 'Roy', color: 'red'}

export default App;
