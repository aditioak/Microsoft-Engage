# Microsoft Engage 2021 Challenge

## A Clone of Microsoft Teams

 This is a video chatting web application that uses WebRTC for Video Conferencing

<p align ="center"> <!-- Youtube Video Link --><a href=" ">View Demo</a></p>
<p align="center"><a href="https://dazzling-yellowstone-81428.herokuapp.com/">Website</a>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
		<li><a href="#installation">Installation</a></li></ul>
    <li><a href="#features">Features</a></li>
	<li><a href="#possible-improvements">Possible Improvements</a></li>
	 <li><a href="#tested-platforms">Tested Platforms</a></li>
	 <li><a href="#known-issues">Known issues</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol></details>

## **About the Project**
The challenge was to **build a Microsoft Teams Clone** . It should be a fully functional prototype with at least one mandatory functionality - **a minimum of two participants should be able connect with each other and have a video conversation**
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




## **Architecture**
Peer to Peer mesh architecture is used which provides group video call functionality. WebRTC is used for real time media communication between devices. 

WebRTC is a fully peer-to-peer technology for the real-time exchange of audio, video, and data, with one central caveat.  A form of discovery and media format negotiation must take place, as discussed elsewhere, in order for two devices on different networks to locate one another. This process is called signaling and involves both devices connecting to a third, mutually agreed-upon server. Through this third server, the two devices can locate one another, and exchange negotiation messages.
 
 <p align="center">
   <img width = "350" src="https://www.wowza.com/wp-content/uploads/WebRTC.gif">
   
 Making this into a group call in P2P translates into a mesh network, where every WebRTC client has a peer connection opened to all other clients directly. When dealing with WebRTC and indicating Peer to Peer mesh, the focus is almost always on media transport. The signaling still flows through servers as WebRTC does not provide signaling which is essential for establishing connection.


 Once users enter the meeting room ID they are redirected to the meeting room where they can connect and chat with each other.

<!-- GETTING STARTED -->
## **Getting Started**

### Prerequisites
- [Basic setup of NodeJs](https://nodejs.org/en/docs/guides/getting-started-guide/)



### Installation

1. Clone the repo
`$ git clone https://github.com/aditioak/Microsoft-Engage`

2. Install aforementioned dependencies using npm install package name (Ex: npm install express). npm install has to be executed from the root directory where package.json resides

3. To run the server locally, use command *node server.js* in the terminal. The server will listen on PORT 3030 (localhost:3030)
<br/>

## **Features**
- Connectivity for multiple users (More than 2)
- Mute and unmute audio
- Play/ Stop video
- Allow chat during video call.
- Screenshare by any participant
- Multiple meeting rooms can be created simultaneously
- Unique ID for every meeting room
- Leave meeting which lets you drop the call
<br/>

## **Possible Improvements**
- Screen Share can be viewed on full screen
- Share link / meeting code feature can be added
- Record meeting
- Add security and end to end encryption
- Attendance log of meeting (time attended by each participant)
- Add transcript of meeting and chats
<br/>
	
## **Tested Platforms**
- Chrome
- Edge
<br/>

## Known Issues
- Video is not removed from the video grid after a user leaves a meeting or screenshare is stopped (A tile is still seen)
	- Quick fix: Refresh the browser
<br/>
	
<!-- CONTACT -->
## Contact
- Email : aditioak02@gmail.com
- Project : [https://github.com/aditioak/Microsoft-Engage](https://github.com/aditioak/Microsoft-Engage)
