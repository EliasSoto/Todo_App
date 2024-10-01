import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import TodoApp from './components/TodoApp';

function App() {
  return(
  <MantineProvider>
    <TodoApp/>
  </MantineProvider>
  
  );
}

export default App
