import { SWRConfig } from 'swr';
import Header from './components/layout/header';
import { Router } from './Router';

function App() {
  return (
    <>
      <Header />
      <SWRConfig
        value={{
          revalidateOnFocus: false,
        }}
      >
        <Router />
      </SWRConfig>
    </>
  );
}

export default App;
