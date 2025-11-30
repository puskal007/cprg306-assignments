"use client";
import { useAuth } from './_utils/auth-context';
import Link from 'next/link';

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping List App</h1>
        
        {!user ? (
          <div>
            <p className="text-gray-600 mb-6">Please sign in to access your shopping list</p>
            <button
              onClick={handleSignIn}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors w-full"
            >
              Sign in with GitHub
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <div className="space-y-4">
              <Link 
                href="/week-10/shopping-list"
                className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Go to Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors w-full"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}