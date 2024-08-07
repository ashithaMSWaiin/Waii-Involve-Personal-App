import "./App.css";

import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import {
  FluentProvider,
  Spinner,
  teamsDarkTheme,
  teamsHighContrastTheme,
  teamsLightTheme,
} from "@fluentui/react-components";
import { useTeams } from "@microsoft/teamsfx-react";
import { TeamsFxContext } from "./internal/context";
import Privacy from "./Privacy";
import TabConfig from "./TabConfig";
import TermsOfUse from "./TermsOfUse";
import HomePage from "./Components/HomePage";
import Questions from "./Components/Questions";
import Resources from "./Components/Resources";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, themeString } = useTeams()[0];
  return (
    <TeamsFxContext.Provider value={{ themeString }}>
      <FluentProvider
        id="fluent-provider"
        theme={
          themeString === "dark"
            ? teamsDarkTheme
            : themeString === "contrast"
            ? teamsHighContrastTheme
            : teamsLightTheme
        }
      >
        <Router>
          {loading ? (
            <Spinner id="spinner" />
          ) : (
            <Routes>
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/config" element={<TabConfig />} />
              <Route path="*" element={<Navigate to={"/home"} />} />
            </Routes>
          )}
        </Router>
      </FluentProvider>
    </TeamsFxContext.Provider>
  );
}
