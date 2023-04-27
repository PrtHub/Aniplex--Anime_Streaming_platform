import { Route, Routes } from "react-router-dom";
import { Searchbar, Sidebar, TopFive } from "./components";
import { Details, Home, Movies, Popular, Search, TopAiring } from "./pages";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col background">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-24px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col">
          <div className="flex-1 h-fit">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/details/:animeId" element={<Details />} />
              <Route path="/top-airing" element={<TopAiring />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopFive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
