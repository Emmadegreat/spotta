import './static/css/index.css';

import Home from './pages/home';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
