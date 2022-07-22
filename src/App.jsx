import React from "react";
import { ContentContainer } from "./component/ContentContainer";
import { DataContainer } from "./component/DataContainer";
import { SideBarMenu } from "./component/SideBarMenu";
import { SearchBar } from "./component/SearchBar";
import { ApiContextProvider } from "./Context/ApiContext";

function App() {
  return (
    <ApiContextProvider>
      <ContentContainer>
        <SideBarMenu />
        <SearchBar />
        <DataContainer />
      </ContentContainer>
    </ApiContextProvider>
  );
}

export default App;
