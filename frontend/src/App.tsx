import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { CircularProgress } from '@mui/material';
import ErrorBoundary from './components/common/ErrorBoundary';
import { DebugComponent, useDebugEffect } from './utils/debug';

// Lazy load components for better performance
const HeroSection = lazy(() => import('./components/layout/HeroSection'));
const DestinationsList = lazy(() => import('./components/destinations/DestinationsList'));
const FoodSpotsList = lazy(() => import('./components/food/FoodSpotsList'));
const RentalsList = lazy(() => import('./components/rentals/RentalsList'));
const HiddenSpotsList = lazy(() => import('./components/hidden-spots/HiddenSpotsList'));
const TripPlanner = lazy(() => import('./components/trip-planner/TripPlanner'));
const AgenciesList = lazy(() => import('./components/agencies/AgenciesList'));
const SignInPage = lazy(() => import('./components/auth/SignInPage'));
const SignUpPage = lazy(() => import('./components/auth/SignUpPage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <CircularProgress />
  </div>
);

// Home page component
const HomePage = () => (
  <>
    <HeroSection />
    <section className="container mx-auto px-4 py-8">
      <DestinationsList />
    </section>
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <FoodSpotsList />
      </div>
    </section>
    <section className="container mx-auto px-4 py-8">
      <RentalsList />
    </section>
  </>
);

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

function AppContent() {
  const { isLoading } = useAuth();
  useDebugEffect('AppContent');

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <DebugComponent componentName="AppContent">
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/hidden-spots" element={
                <ProtectedRoute>
                  <HiddenSpotsList />
                </ProtectedRoute>
              } />
              <Route path="/trip-planner" element={
                <ProtectedRoute>
                  <TripPlanner />
                </ProtectedRoute>
              } />
              <Route path="/tour-packages" element={<AgenciesList />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </DebugComponent>
  );
}

function App() {
  console.log('App rendering');
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
