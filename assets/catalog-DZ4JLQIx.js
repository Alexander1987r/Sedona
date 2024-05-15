import{g as i,a as o}from"./util-DIQZ9YTG.js";const t=document.querySelector(".video__player"),r=()=>{const e=document.createElement("iframe");e.classList.add("video__player-trailers"),e.src="https://www.youtube.com/embed/ApZTxOPoa54?si=PiHJDg5lLzkq4qWX",t.innerHTML="",t.appendChild(e),e.srcdoc=`
   <style>
   *{
     padding: 0;
     margin: 0;
     overflow: hidden;
   }
   html,body{
     width: 100%;
     height: 100%;
   }
   img,svg{
     position: absolute;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
   }
   #button{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     border: none;
     background-color: transparent;
     cursor: pointer;
     width: 36px;
     height: 36px;
   }
   .video__player-image{
    object-fit: cover;
   }
   @media(min-width:1024px){
    #button{
     width: 64px;
     height: 64px;
    }
   }
   </style>
   <a href="https://www.youtube.com/embed/ApZTxOPoa54?si=PiHJDg5lLzkq4qWX">
    <picture class="photos__picture">
     <source srcset="./video-desktop.jpg" media="(min-width:1200px)">
     <source srcset="./video-tablet.jpg" media="(min-width:768px)">
     <img class="video__player-image" src="./video.jpg" alt="картинка видео" width="320" height="201">
    </picture>
     <div id="button">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="32" cy="32" r="32" fill="#FF3D00" />
       <path d="M42.5 31.134C43.1667 31.5189 43.1667 32.4811 42.5 32.866L27.5 41.5263C26.8333 41.9112 26 41.4301 26 40.6603V23.3397C26 22.5699 26.8333 22.0888 27.5 22.4737L42.5 31.134Z" fill="white" />
      </svg>
     </div>
   </a>
   `};r();i();o();
