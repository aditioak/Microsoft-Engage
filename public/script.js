// Creating a client
const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;

//create a peer object
var peer = new Peer(undefined);

let myVideoStream;


//getUserMedia() method prompts the user for permission to use a media input
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);

		//To answer other user's call and add their video stream
    peer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
  });

//id is the id of the person that has joined the room
peer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

//Connecting the user to videocall meet
const connectToNewUser = (userId, stream) => {
  const call = peer.call(userId, stream);
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
};

// Adding the new user's stream to the video grid
const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

// Taking the chat message input and displaying it to all clients
let text = $("input");

// Sending message when enter is pressed (13 is code for enter)
$("html").keydown((e) => {
  if (e.which == 13 && text.val().length !== 0) {
    console.log(text.val());
		//Sends message; message event is used to pass the message from server to client
    socket.emit("message", text.val());
    text.val("");
  }
});

//Receive message that we sent using socket.emit
socket.on("createMessage", (message) => {
  $("ul").append(`<li class="message"><b>user</b><br/>${message}</li>`);
  scrollToBottom();
});

// Function to scroll within the chat tab
const scrollToBottom = () => {
  let d = $(".main__chat_window");
  d.scrollTop(d.prop("scrollHeight"));
};

// Function to mute and unmute audio
const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
};

const setMuteButton = () => {
  const html = `
      <i class="fas fa-microphone"></i>
      <span>Mute</span>
    `;
  document.querySelector(".main__mute_button").innerHTML = html;
};

const setUnmuteButton = () => {
  const html = `
      <i class="unmute fas fa-microphone-slash"></i>
      <span>Unmute</span>
    `;
  document.querySelector(".main__mute_button").innerHTML = html;
};

//Function to stop/play video
const playStop = () => {
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo();
  } else {
    setStopVideo();
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
};

const setStopVideo = () => {
  const html = `
      <i class="fas fa-video"></i>
      <span>Stop Video</span>
    `;
  document.querySelector(".main__video_button").innerHTML = html;
};

const setPlayVideo = () => {
  const html = `
    <i class="stop fas fa-video-slash"></i>
      <span>Play Video</span>
    `;
  document.querySelector(".main__video_button").innerHTML = html;
};


//Function to share screen using the getDisplayMedia method
const shareScreen = async () => {
  const socket = io("/");
  const videoGrid = document.getElementById("video-grid");
  const myPeer = new Peer();
  const myVideo2 = document.createElement("video");
  myVideo2.muted = true;
  const peers = {};

  navigator.mediaDevices
    .getDisplayMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      myVideoStream = stream;
      addVideoStream(myVideo2, stream);
      myPeer.on("call", (call) => {
        call.answer(stream);
        const video2 = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video2, userVideoStream);
        });
      });

      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, stream);
      });
    });

  myPeer.on("open", (id) => {
    socket.emit("join-room", ROOM_ID, id);
  });
};
