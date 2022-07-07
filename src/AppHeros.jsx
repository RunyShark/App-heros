import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./ui";

export const AppHeros = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
};
