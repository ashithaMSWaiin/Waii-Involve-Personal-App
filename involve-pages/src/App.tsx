import * as React from "react";
import { RdsCompAppShell, RdsCompAppShellItem, RdsCompFixedSideMenuContainer, RdsRadioButton } from "../public";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import YourChannel from "./Components/YourChannel";
import TeamQuestions from "./Components/TeamQuestions";
import NewQuestion from "./Components/NewQuestion";

function App() {
  return (
    <BrowserRouter>
      <RdsCompAppShell displayType="Classic">
        <React.Fragment key=".0">
          <RdsCompAppShellItem title="">
            <div className="row">
              <div className="d-flex">
                <div>
                  <RdsCompFixedSideMenuContainer
                    position={"left"}
                    menuItems={[
                      { name: 'Overview', icon: '' },
                      { name: 'Dashboard', icon: 'home', Path: '/dashboard' },
                      { name: 'All Resources', icon: 'tenant' },
                      { name: 'Live Support', icon: '' },
                      { name: 'Your Channel', icon: 'icons', Path: '/YourChannel' },
                      { name: 'Team Questions', icon: 'help', Path: '/TeamQuestions' },
                      { name: 'Invoice Management', icon: 'editions' },
                    ]}
                  />
                </div>
                <div  className="w-100">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/YourChannel" element={<YourChannel />} />
                    <Route path="/TeamQuestions" element={<TeamQuestions />} />
                    <Route path="/new-question" element={<NewQuestion/>} />

                  </Routes>
                </div>
              </div>
            </div>
          </RdsCompAppShellItem>
        </React.Fragment>
      </RdsCompAppShell>
    </BrowserRouter>
  );
}

export default App;
