import { BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/layouts/Layout';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <AppRouter/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
