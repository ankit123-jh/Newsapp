import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// import "./App.css";

// import React, { Component } from "react";
// import NavBar from "./components/NavBar";
// import News from "./components/News";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";
// export default class App extends Component {
//   pageSize = 15;

//   state = {
//     progress: 0,
//   };

//   setProgress = (progress) => {
//    {setState({ progress: progress });
//   };
//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <LoadingBar
//             height={3}
//             color="#f11946"
//             progress={state.progress}
//           />
//           <Routes>
//             <Route
//               exact
//               path="/"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="general"
//                   pageSize={pageSize}
//                   country="us"
//                   category="general"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/business"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="business"
//                   pageSize={pageSize}
//                   country="us"
//                   category="business"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/entertainment"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="entertainment"
//                   pageSize={pageSize}
//                   country="us"
//                   category="entertainment"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/general"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="general"
//                   pageSize={pageSize}
//                   country="us"
//                   category="general"
//                 />
//               }
//             />
//             <Route
//               path="/health"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="health"
//                   pageSize={pageSize}
//                   country="us"
//                   category="health"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/science"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="science"
//                   pageSize={pageSize}
//                   country="us"
//                   category="science"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/sports"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="sports"
//                   pageSize={pageSize}
//                   country="us"
//                   category="sports"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/technology"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   key="technology"
//                   pageSize={pageSize}
//                   country="us"
//                   category="technology"
//                 />
//               }
//             />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
