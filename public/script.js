const myVideo=document.createElement('video');
myVideo.muted=true;
let myVideStream;

navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(function(stream) {
myVideStream = stream;
addVideoStream(myVideo,stream);
})

const addVideoStream=(video,stream) => {
    video.srcObject = stream;
    video.addEventListener('loadmetadata',()=>{

    })
    

}
