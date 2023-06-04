import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

import CollectionPage from '~/pages/collection';
import MainPage from '~/pages/main';

const RouteWrapper = tw.main`relative w-full h-full`;
const App = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<CollectionPage />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default App;
