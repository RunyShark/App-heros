import { AppRouter, AuthProvider } from "./index";

export const AppHeros = () => {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};
//
