import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Auth from './routes/auth/auth.component';
import Navigation from './routes/navigation/navigation.component';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="auth" element={<Auth />} />
        </Route>
      </Routes>
    </Router>
  );
}
