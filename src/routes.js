import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./app/App";
import Available from "./components/Available";
import Layout from "./components/Layout";
import MyLibrary from "./components/MyLibrary";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/myLibrary" element={<MyLibrary />} />
          <Route exact path="/available" element={<Available />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
