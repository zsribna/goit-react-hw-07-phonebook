import { StyledAppContainer } from 'App.styled';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  return (
    <StyledAppContainer>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
