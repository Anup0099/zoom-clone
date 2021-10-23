const socket = io('/');


const videoGrid = document.getElementById("video-grid");
console.log(videoGrid);

const myVideo = document.createElement("video");
myVideo.muted = true;
var peer = new Peer(undefined,{
    path: '/peerjs',
    host: '/',
    port: '3030'
});
let myVideStream;

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(function (stream) {
    myVideStream = stream;
    addVideoStream(myVideo, stream);
  });
  peer.on('open', id => {
   
    socket.emit('join-room', ROOM_ID, id);
  })
socket.emit('join-room',ROOM_ID);
socket.on('user-connected',(userId)=>{
    connectToNewUser(userId);
});
const connectToNewUser = (userId) => {
    console.log(userId);

}
const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadmetadata", () => {
    video.play();
  });

  videoGrid.append(video);
};
