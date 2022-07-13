import { CurrentWeather } from "./component/CurrentWeather";
import { ListDays } from "./component/ListDays";
import { SideBarMenu } from "./component/SideBarMenu";
import { WeatherStats } from "./component/WeatherStats";
import { ApiContextProvider } from "./Context/ApiContext";
import "./styles/App.css"

function App() {
  return (
    <ApiContextProvider>
      <div className="Main-container sunny">
        <SideBarMenu />
        <CurrentWeather />
        <WeatherStats />
        <ListDays />
      </div>
    </ApiContextProvider>
  );
}

export default App;
