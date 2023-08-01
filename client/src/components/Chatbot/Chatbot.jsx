import React from "react";
import "./Chatbot.css";
import ChatBot from 'react-simple-chatbot';
import {Segment, segment} from "semantic-ui-react"
const Chatbot = () => {
  const steps = [
    {
      id: "Greet",        
      message: "Hello, Welcome to our App",        
      trigger: "Done",        
    },        
    {       
      id: "Done",        
      message: "Please enter your name!",        
      trigger: "waiting1",        
    },      
    {      
      id: "waiting1",      
      user: true,      
      trigger: "Name",      
    },      
    {       
      id: "Name",     
      message: "Hi {previousValue}, Please select your issue",     
      trigger: "issues",     
    },      
    {      
      id: "issues",   
      options: [   
        {    
          value: "React",   
          label: "React",        
          trigger: "React",       
        },       
        { value: "Angular", label: "Angular", trigger: "Angular" },       
      ],       
    },       
    {       
      id: "React",       
      message:        
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",        
      end: true,       
    },       
    {       
      id: "Angular",       
      message:       
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",       
      end: true,       
    },       
  ]; 

  return(
<div>
  <h1 className="heading">Chat with me</h1>
  <Segment className="main">
  <ChatBot steps={steps} />
  </Segment>
</div>
  ) 
};

export default Chatbot;
