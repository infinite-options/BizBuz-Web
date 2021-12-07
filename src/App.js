// import React, { useState, useEffect } from "react";
// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import './App.css';

// import Navigation from './Navigation/navigation'
// import Home from './Home/Home'
// import Footer from './Footer/Footer'

// function App() {
//   return (
//     <div className="App">
//       {/* <Navigation /> */}
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           {/* <Route path="dashboard" element={<Dashboard />} /> */}

//           {/* Using path="*"" means "match anything", so this route
//                   acts like a catch-all for URLs that we don't have explicit
//                   routes for. */}
//           {/* <Route path="*" element={<NoMatch />} /> */}
//         </Route>
//       </Routes>
//       {/* <Switch> */}
//       {/* <Route path="/" element={<Home />} /> */}
//       {/* </Switch> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       {/* A "layout route" is a good place to put markup you want to
//           share across all the pages on your site, like navigation. */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             {/* <Link to="/dashboard">Dashboard</Link> */}
//           </li>
//           <li>
//             {/* <Link to="/nothing-here">Nothing Here</Link> */}
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       {/* An <Outlet> renders whatever child route is currently active,
//           so you can think about this <Outlet> as a placeholder for
//           the child routes we defined above. */}
//       <Outlet />
//     </div>
//   );
// }


// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }
// export default App;

import * as React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter, } from "react-router-dom";
import './App.css';

import Navigation from './Navigation/navigation'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import Packages from "./Packages/Packages";
import ThankYou from "./ThankYou/Thankyou";
import ThankYou2 from "./ThankYou/Thankyou2";
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import Designpackages from "./DesignPackages/DesignPackages";
import Subscriptions from "./DesignPackages/Subscriptions";
import Billing from "./DesignPackages/Billing";
import ManageSubscriptions from "./DesignPackages/ManageSubscriptions";
import Design from "./Admin/Design";
import BrandDetails from "./Admin/BrandDetails";

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="packages" element={<Packages />} />
            <Route path="thankyou" element={<ThankYou />} />
            <Route path="thankyou2" element={<ThankYou2 />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="designpackages" element={<Designpackages />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="billing" element={<Billing />} />
            <Route path="manageSubscriptions" element={<ManageSubscriptions />} />
            <Route path="design" element={<Design />} />
            <Route path="brandDetails" element={<BrandDetails />} />

            {/* <Route path="dashboard" element={<Dashboard />} /> */}

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav> */}

      {/* <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

