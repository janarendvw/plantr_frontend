import './App.scss'
import MenuBarMain from "./components/layout/menu/menu_bar/MenuBarMain";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDashboard from "./pages/PageDashboard";
import PageProfile from "./pages/PageProfile";
import PageStats from "./pages/PageStats";
import ContentContainer from "./components/layout/containers/ContentContainer";
import PmGeneral from "./components/layout/menu/profile_menu/PmGeneral";
import { PlantContextProvider } from "./contexts/PlantContext"

function App() {
  return (
      <PlantContextProvider>
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<ContentContainer/>}>
                      <Route index element={<PageDashboard/>}/>
                      <Route path="/dashboard" element={<PageDashboard/>}/>
                      <Route path="profile" element={<PageProfile/>}>
                          <Route index element={<PmGeneral/>}/>
                          <Route path='general-settings' element={<PmGeneral/>}/>
                      </Route>
                      <Route path="statistics" element={<PageStats/>}/>
                  </Route>
              </Routes>
      <MenuBarMain/>
      </BrowserRouter>
      </PlantContextProvider>
  )
}

export default App
