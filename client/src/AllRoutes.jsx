import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Community from "./Pages/Community/Community";
import Chatbots from "./components/Chatbot/Chatbot";
import Profile from "./Pages/Profile/Profile"
import Chatbot from "./Pages/ChatBot/Chatbot";
import Subscription from "./Pages/Subscription/Subscription";
const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
    
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route path= "/Community"
       element={<Profile slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
      <Route path= "/Chat"
       element={<Chatbot slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
      <Route path= "/subscription"
       element={<Subscription slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
      <Route path= "/chatbot"
       element={< Chatbots slideIn={slideIn} handleSlideIn={handleSlideIn}/>}/>
    </Routes>
  );
};

export default AllRoutes;
