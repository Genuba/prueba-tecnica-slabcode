import './App.css';
import Calendar from './components/calendar/Calendar';

function App() {
  return (
    <div className="h-screen-nav-fix w-screen font-montserrat overflow-hidden bg-gray-50 text-gray-900">
        <div className="w-full h-full flex flex-col">
          <Calendar />
        </div>
      </div>
  );
}

export default App;
