import './App.scss'
import MenuBarMain from "./components/layout/menu/menu_bar/MenuBarMain";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageDashboard from "./pages/PageDashboard";
import PageProfile from "./pages/PageProfile";
import PageStats from "./pages/PageStats";
import ContentContainer from "./components/layout/containers/ContentContainer";
import PmGeneral from "./components/layout/menu/profile_menu/PmGeneral";
import {PlantContextProvider} from "./contexts/PlantContext";
import ImageCheck from "./components/layout/containers/ImageCheck";
import PmPrivacy from "./components/layout/menu/profile_menu/PmPrivacy";
import PmProfile from "./components/layout/menu/profile_menu/PmProfile";
import PmInfo from "./components/layout/menu/profile_menu/PmInfo";
import PmSupport from "./components/layout/menu/profile_menu/PmSupport";

function App() {
  return (
      <PlantContextProvider>
          <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<ContentContainer/>}>
                          <Route index element={<PageDashboard/>}/>
                          <Route path="/dashboard" element={<PageDashboard/>}/>
                          <Route path="/profile" element={<PageProfile/>}>
                              <Route index element={<PmGeneral/>}/>
                              <Route path='general-settings' element={<PmGeneral/>}/>
                              <Route path='privacy-settings' element={<PmPrivacy/>}/>
                              <Route path='profile-settings' element={<PmProfile/>}/>
                              <Route path='info' element={<PmInfo/>}/>
                              <Route path='support' element={<PmSupport/>}/>
                          </Route>
                          <Route path="/statistics" element={<PageStats/>}/>
                          <Route path="/image-check" element={<ImageCheck/>}/>

                      </Route>
                  </Routes>
          <MenuBarMain/>
          </BrowserRouter>
      </PlantContextProvider>
  )
}

export default App
