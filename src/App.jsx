import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <div>
          <h2>Primary</h2>
          <Button color="primary" />
        </div>
        <div>
          <h2>Secondary</h2>
          <Button color="secondary" />
        </div>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      </div>
    </div>
  );
}

export default App;
