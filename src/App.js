import React from 'react';
import SchemaBuilder from './components/SchemaBuilder/schemaBuilder'; // ✅ Correct path
import './App.css'; // Optional, if you have global styles


function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', padding: '20px' }}>
      {/* Left side: Form */}
      <div style={{ flex: 1, paddingRight: '20px', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
        <h2>Schema Builder</h2>
        <SchemaBuilder />
      </div>

      
    </div>
  );
}

export default App;
