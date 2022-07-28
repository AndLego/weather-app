import React from "react";
import { ContentContainer } from "./components/ContentContainer";
import { DataContainer } from "./components/DataContainer";
import { SideBarMenu } from "./components/SideBarMenu";
import { SearchBar } from "./components/SearchBar";
import { ApiContextProvider } from "./Context/ApiContext";
import { SavePlaceContextProvider } from "./Context/SavePlaceContext";

function App() {
  return (
    <ApiContextProvider>
      <SavePlaceContextProvider>
        <ContentContainer>
          <SideBarMenu />
          <SearchBar />
          <DataContainer />
        </ContentContainer>
      </SavePlaceContextProvider>
    </ApiContextProvider>
  );
}

export default App;
