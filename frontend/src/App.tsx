import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { ItemsPage } from "./pages/items.page";
import { FavoritePage } from "./pages/favorite.page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/items"} />} />
        <Route path={"/items"} element={<ItemsPage />} />
        <Route path={"/favorite"} element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
