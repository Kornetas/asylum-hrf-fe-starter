import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */

/* ✅ Completed Ticket 3: Auth0 Authentication & Profile Page

- Integrated Auth0 authentication via @auth0/auth0-react
- Configured Auth0Provider with environment variables (.env)
- Implemented login/logout functionality with Auth0's useAuth0() hook
- Created LoggingButtons component for auth actions
- Navigation now conditionally displays "Profile" only when user is authenticated
- Built protected /profile page to show logged-in user’s name, email, and avatar
- Proper loading and not-authenticated states handled
- Everything works locally on http://localhost:5173 as expected

Ready for review.

----------------------------------------------------------------------------------

✅ Ukończono Ticket 3: Integracja Auth0 oraz strona profilu użytkownika

- Dodano autoryzację użytkownika za pomocą biblioteki @auth0/auth0-react
- Skonfigurowano Auth0Provider w main.jsx z danymi z pliku .env
- Utworzono komponent LoggingButtons z przyciskiem Log In / Log Out
- Dodano warunkowe wyświetlanie linku "Profile" w nawigacji tylko po zalogowaniu
- Utworzono stronę /profile pokazującą dane użytkownika z Auth0 (imię, email, avatar)
- Obsłużono przypadki: brak logowania, ładowanie danych
- Całość działa lokalnie na `http://localhost:5173` zgodnie z wymaganiami

Gotowe do code review i zatwierdzenia. */

const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { isLoading, user, isAuthenticated, logout } = useAuth0();

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div className='text-center p-4'>You need to log in to view this page.</div>;
  }

  return (
    <div className='profile-card p-8 text-center'>
      <div className='profile-avatar bg-indigo-600 text-white w-16 h-16 rounded-full mx-auto flex items-center justify-center text-xl font-bold mb-4'>
        <span>
          {user.name.charAt(0).toUpperCase()}
          {user.name.charAt(1).toUpperCase()}
        </span>
      </div>
      <h2 className='text-2xl font-semibold'>{user.name}</h2>
      <p className='text-gray-600 mb-4'>{user.email}</p>
      <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
