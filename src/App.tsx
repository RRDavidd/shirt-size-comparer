import React from 'react';
import './App.css';
import Layout from './components/Layout';
import SizesCalculator from './components/SizeCalculator';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1 className="text-9xl pt-20 mb-14">Shirt Size Calculator</h1>
        <SizesCalculator />
      </Layout>
    </div>
  );
}

export default App;
