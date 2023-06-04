import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

import CollectionPage from '~/pages/collection';
import ListingPage from '~/pages/listing';
import MainPage from '~/pages/main';

import { getAccessToken } from './api/luniverse/auth';

const RouteWrapper = tw.main`relative w-full h-full`;
const App = () => {
  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<CollectionPage />} />
          <Route path="/listing" element={<ListingPage />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default App;
