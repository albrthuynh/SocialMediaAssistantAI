// Styles for the main home page of the application
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import { SidebarProvider } from "@/components/ui/sidebar"; 
import { AnalyticsSidebar } from './components/AnalyticsSidebar';
import { ChatSidebar } from './components/ChatSidebar';
import { MainContent } from './components/MainContent';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: calc(100vh - 60px); // Adjust based on your navbar height
  background-color: #2a2a2a;
`;

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <SidebarProvider defaultOpen={true}>
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="flex w-full min-h-screen">
                  <AnalyticsSidebar />
                  <MainContent />
                  <ChatSidebar />
                </div>
              } 
            />
            <Route 
              path="/home" 
              element={
                <div className="flex w-full min-h-screen">
                  <AnalyticsSidebar />
                  <MainContent />
                  <ChatSidebar />
                </div>
              } 
            />
          </Routes>
        </SidebarProvider>
      </AppContainer>
    </>
  );
}

export default App;
