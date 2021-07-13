#Microsoft Engage 2021 Challenge

## A Clone of Microsoft Teams

 This is a video chatting web application that uses WebRTC for Video Conferencing
 
<!-- PROJECT LOGO -->
<p align="center"> <p align ="center"> <!-- Youtube Video Link -->
   <a href=" ">View Demo</a>
   
   <a href="https://dazzling-yellowstone-81428.herokuapp.com/">Website</a>
   </p>
   </p>


   <!-- TABLE OF CONTENT -->
   <details open="open">
   <summary>Table of Contents</summary>
   <ol> <li> <a href="#about-the-project">About The Project</a>
      <ul>
	  <li><a href="#built-with">Built With</a></li></ul> </li>
    <li><a href="#architecture">Architecture</a>
	</li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#pre-requisites">Pre-requisites</a></li></ul>
    <li><a href="#features">Features</a></li>
	 <li><a href="#possible-improvements">Possible Improvements</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## **About the Project**
The challenge was to **build a Microsoft Teams Clone** . It should be a fully functional prototype with at least one mandatory functionality - *a minimum of two participants should be able connect with each other and have a video conversation*      
[Microsoft Engage 2021](https://microsoft.acehacker.com/engage2021/?mc_cid=51cf8705a5&mc_eid=e7a7568555#challenge)

### **Built With**
* [WebRTC](https://webrtc.org/)
* [Nodejs](https://nodejs.org/en/)
* [Socket.io](https://www.npmjs.com/package/socket.io)
* [Express](https://www.npmjs.com/package/express)
* [Peer](https://www.npmjs.com/package/peer)
* [Peerjs](https://www.npmjs.com/package/peerjs)
* [uuid](https://www.npmjs.com/package/uuid)
* [cors](https://www.npmjs.com/package/cors)



## **Architecture :**
Peer to Peer mesh architecture is used which provides group video call functionality. WebRTC is used for real time media communication between devices. 

WebRTC is a fully peer-to-peer technology for the real-time exchange of audio, video, and data, with one central caveat.  A form of discovery and media format negotiation must take place, as discussed elsewhere, in order for two devices on different networks to locate one another. This process is called signaling and involves both devices connecting to a third, mutually agreed-upon server. Through this third server, the two devices can locate one another, and exchange negotiation messages.
 
 Making this into a group call in P2P translates into a mesh network, where every WebRTC client has a peer connection opened to all other clients directly. When dealing with WebRTC and indicating Peer to Peer mesh, the focus is almost always on media transport. The signaling still flows through servers as WebRTC does not provide signaling which is essential for establishing connection.
<p align="center">
   <img width = "350" src="https://www.wowza.com/wp-content/uploads/WebRTC.gif">

 Once users enter the meeting room ID they are redirected to the video calling page where they can connect and chat with each other.

<!-- GETTING STARTED -->
## **Getting Started**

### Pre-requisites
- [Basic setup of NodeJs](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Basic setup of VSCode](https://code.visualstudio.com/download)
- [Basic setup of ExpressJs](https://expressjs.com/en/starter/installing.html)

### Installation

1. Clone the repo
`$ git clone https://github.com/aditioak/Microsoft-Engage`


2. To run the server locally, use command *node server.js* in the terminal. The server will listen on PORT 3030 (localhost:3030).


<!-- DEPENDENCIES -->
## Dependencies
* [socket.io](https://www.npmjs.com/package/socket.io)
* [express](https://www.npmjs.com/package/express)
* [peer](https://www.npmjs.com/package/peer)
* [peerjs](https://www.npmjs.com/package/peerjs)
* [uuid](https://www.npmjs.com/package/uuid)
* [cors](https://www.npmjs.com/package/cors)


<!-- ROADMAP -->
### Features
- Connectivity for multiple users (More than 2)
- Mute and unmute audio
- Play/ Stop video
- Allow chat during video call.
- Screenshare by any participant
- Multiple meeting rooms can be created simultaneously
- Unique ID for every meeting room
- Leave meeting which lets you drop the call


### Possible Improvements
- Screen Share can be improved to be viewed on full screen for all the participants.
- Share link/Code feature can be added.

<!-- CONTACT -->
## Contact
- Email : aditioak02@gmail.com
- Project : [https://github.com/aditioak/Microsoft-Engage](https://github.com/aditioak/Microsoft-Engage)
