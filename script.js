window.addEventListener("load", event => {
   ////////////////
   // Variables
   ////////////////

   const iconTopExpand = document.querySelector(".icon.topExpand"),
         iconBottomExpand = document.querySelector(".icon.bottomExpand"),
         topContent = document.querySelector(".topContent"),
         bottomContent = document.querySelector(".bottomContent"),
         playBtn = document.querySelector(".btnPlay"),
         musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
         swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
         imageBg = document.querySelector(".imageBg"),
         albumBg = document.querySelector(".albumBg"),
         wrapper = document.querySelector(".wrapper"),
         bodyBg = document.querySelector(".bodyBg"),
         next = document.querySelector(".swiper-button-next"),
         prev = document.querySelector(".swiper-button-prev");

   // Songs
   const songs = [
      {
         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/mekaninsahibi.jpg",
         artistName: "Norm Ender",
         songName: "Mekanın Sahibi",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/mekaninsahibi.mp3",
         color: "#011627"
      },
      {
         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/beatcoin.jpg",
         artistName: "Ceza",
         songName: "Beatcoin",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/beatcoin.mp3",
         color: "#011627"
      },

      {
         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/benjamins3.jpg",
         artistName: "Rozz Kalliope & Ece Seçkin",
         songName: "Benjamins 3",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/benjamins3.mp3",
         color: "#011627"
      },
{

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/nebakiyondayidayi.jpg",
         artistName: "Keişan & Anıl Piyancı",
         songName: "Ne Bakıyon Dayı Dayı",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/nebakiyondayidayi.mp3",
         color: "#011627"

      },  

{
         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/yalan.jpg",
         artistName: "Aleyna Tilki",
         songName: "Yalan",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/yalan.mp3",
         color: "#011627"
      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/kafa10.jpg",
         artistName: "Anıl Piyancı & Ezhel",
         songName: "Kafa 10",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/kafa10.mp3",
         color: "#011627"

      },  
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/lolo.jpg",
         artistName: "Ezhel",
         songName: "Lolo",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/lolo.mp3",
         color: "#011627"

      },  
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/muhur.jpg",
         artistName: "Irmak Arıcı & Mustafa Ceceli",
         songName: "Mühür",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/muhur.mp3",
         color: "#011627"

      },  
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/goal.jpg",
         artistName: "Patron",
         songName: "Goal",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/goal.mp3",
         color: "#011627"

      },  
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/tabitabi.jpg",
         artistName: "Sinan Akçıl",
         songName: "Tabi Tabi",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/tabitabi.mp3",
         color: "#011627"

      },  
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/nasilsinaskta.jpg",
         artistName: "Aleyna Tilki",
         songName: "Nasılsın Aşkta",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/nasilsinaskta.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/felaket.jpg",
         artistName: "Ezhel",
         songName: "Felaket",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/felaket.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/kaktus.jpg",
         artistName: "Norm Ender",
         songName: "Kaktüs",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/kaktus.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/321.jpg",
         artistName: "Ben Fero",
         songName: "3, 2, 1",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/321.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/cennet.jpg",
         artistName: "Ebru Gündeş",
         songName: "Cennet",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/cennet.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/kaktus.jpg",
         artistName: "Norm Ender",
         songName: "Deli",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/deli.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/farkimizvar.jpg",
         artistName: "Hadise",
         songName: "Farkımız Var",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/farkimizvar.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/fightkulup.jpg",
         artistName: "Killa Hakan",
         songName: "Fight Kulüp",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/fightkulup.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/gecegibigonlun.jpg",
         artistName: "Irmak Arıcı",
         songName: "Gece Gibi Gönlün",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/irmakarici.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/insansevmezmi.jpg",
         artistName: "Soner Sarıkabadayı",
         songName: "İnsan Sevmez Mi?",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/insansevmezmi.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/mor.jpg",
         artistName: "Hande Yener",
         songName: "Mor",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/mor.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/neyimvarki.jpg",
         artistName: "Ceza & Sagopa Kajmer",
         songName: "Neyim Var Ki?",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/neyimvarki.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/neyse.jpg",
         artistName: "Sagopa Kajmer",
         songName: "Neyse",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/neyse.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/neyse.jpg",
         artistName: "Sagopa Kajmer",
         songName: "Toz Taneleri",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/toztaneleri.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/yokyok.jpg",
         artistName: "Feride Hilal Akın",
         songName: "Yok Yok",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/yokyok.mp3",
         color: "#011627"

      },   
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/aya.jpg",
         artistName: "Murda & Ezhel",
         songName: "Aya",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/aya.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/olumeinat.jpg",
         artistName: "Hidra",
         songName: "Ölüme İnat",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/olumeinat.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/hicsevmedimseni.jpg",
         artistName: "Hayki",
         songName: "Hiç Sevmedim Seni",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/hicsevmedimseni.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/ahzaman.jpg",
         artistName: "Derya Uluğ",
         songName: "Ah Zaman",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/ahzaman.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/dudu.jpg",
         artistName: "Tarkan",
         songName: "Dudu",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/dudu.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/cantresist.jpg",
         artistName: "Halogen",
         songName: "Can't Resist",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/cantresist.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/ugotthat.jpg",
         artistName: "Halogen",
         songName: "U Got That",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/ugotthat.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/herebefore.jpg",
         artistName: "Halogen",
         songName: "Here Before",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/herebefore.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/secrets.jpg",
         artistName: "Tiësto",
         songName: "Secrets (Radio Edit)",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/secrets.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/carryyouhome.jpg",
         artistName: "Tiësto",
         songName: "Carry You Home",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/carryyouhome.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/infected.jpg",
         artistName: "Tiësto",
         songName: "Infected",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/infected.mp3",
         color: "#011627"

      },
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/smash.jpg",
         artistName: "NebeZAO",
         songName: "Smash",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/smash.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/bangarang.jpg",
         artistName: "Skrillex",
         songName: "Bangarang",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/bangarang.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/monster.jpg",
         artistName: "LUM!X",
         songName: "Monster",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/monster.mp3",
         color: "#011627"

      }, 
      {

         img: "https://www.berkaymazman.com.tr/Muziklen/song-images/hebecoma.jpg",
         artistName: "Виктор Вайлс",
         songName: "Невесома",
         song: "https://www.berkaymazman.com.tr/Muziklen/songs/hebecoma.mp3",
         color: "#011627"

      }                        
      ];


   // Music Groups
   const groups = [
      {
         title: "Rap",
         img: "https://www.berkaymazman.com.tr/Muziklen/playlist-images/rap.png",
         link: "https://www.berkaymazman.com.tr/Muziklen/rap"
      }
   ];

   // Playlists
   const playlists = [
      {
         title: "Az Bilinenler",
         img:
         "https://www.berkaymazman.com.tr/Muziklen/playlist-images/azbilinenler.png"
      },
      {
         title: "Rap",
         img:
         "https://www.berkaymazman.com.tr/Muziklen/playlist-images/rap.png"
      },
      {
         title: "Pop",
         img:
         "https://www.berkaymazman.com.tr/Muziklen/playlist-images/pop.png"
      },
      {
         title: "Her Yerden Şarkı",
         img:
         "https://www.berkaymazman.com.tr/Muziklen/playlist-images/heryerdensarki.png"
      }
   ];

   ////////////////
   // Events
   ////////////////

   iconTopExpand.addEventListener("click", expandTop);
   iconBottomExpand.addEventListener("click", expandBottom);
   playBtn.addEventListener("click", playSong);

   ////////////////
   // Functions
   ////////////////

   function playSong() {
      if (playBtn.classList.contains("pause")) {
         playBtn.classList.remove("pause");
         document.querySelector(".swiper-slide-active audio").pause();
      } else {
         playBtn.classList.add("pause");
         document.querySelector(".swiper-slide-active audio").play();
      }
      progressBar();
   }

   function expandTop() {
      if (topContent.classList.contains("expand")) {
         topContent.classList.remove("expand");
      } else {
         topContent.classList.add("expand");

         //Swiper Music Goups
         var mySwiper2 = new Swiper(".swiper-container.slider-two", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: "auto",
            draggable: true
         });
      }
      albumSize();
   }

   function expandBottom() {
      if (bottomContent.classList.contains("expand")) {
         bottomContent.classList.remove("expand");
      } else {
         bottomContent.classList.add("expand");
      }
      albumSize();
      progressBar();
   }

   // change Album size

   function albumSize() {
      const albumContent = document.querySelectorAll(".albumContent");

      if (
         topContent.classList.contains("expand") &&
         bottomContent.classList.contains("expand")
      ) {
         albumContent.forEach(function(el) {
            el.classList.add("small");
         });
      } else {
         albumContent.forEach(function(el) {
            el.classList.remove("small");
         });
      }
   }

   //Swiper Albums

   songs.forEach(function(el) {
      let template = `
<div class="swiper-slide">
<div class="settings">
<div class="icon heart"></div>
<div class="icon plus"></div>
</div>
<audio src="${el.song}"></audio>
<div class="albumContent">
<div class="albumCover" style="background-color:${
      el.color
      }"><img src="${el.img}"></div>
<p class="artistName">${el.artistName}</p>
<p class="songName">${el.songName}</p></div>
<div class="playlistsContent">
<div class="icon close"></div>
</div>
</div>`;

      swipperWrapper.insertAdjacentHTML("beforeend", template);
   });

   // To Create Playlists
   playlists.forEach(function(el) {
      let templatePlaylist = `
<div class="playlist">
<span class="checkbox"></span>
<figure class="playlistBg"><img src="${el.img}"></figure>
<figure class="playlistThumb"><img src="${el.img}"></figure>
<p class="playlistTitle">${el.title}</p></div>`;

      var playlistContent = document.querySelectorAll(".playlistsContent");

      playlistContent.forEach(function(el) {
         el.insertAdjacentHTML("beforeend", templatePlaylist);
      });
   });

   // Slider Songs (Middle)

   var mySwiper = new Swiper(".swiper-container.slider-one", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: false,
      effect: "coverflow",

      coverflowEffect: {
         rotate: 40,
         slideShadows: false
      },

      // Navigation arrows
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      }
   });

   // Change Song & Album BG
   next.addEventListener("click", changeSong);
   prev.addEventListener("click", changeSong);

   function changeSong() {
      if (playBtn.classList.contains("pause")) {
         document.querySelectorAll("audio").forEach(function(el) {
            el.pause();
         });
         document.querySelector(".swiper-slide-active audio").play();
      }
      changeBg();
      progressBar();
      closePlaylists();
      changeBgColor();
   }

   function changeBg() {
      albumBg.classList.add("animeBg");

      setTimeout(() => {
         imageBg.src = document.querySelector(
            ".slider-one .swiper-slide-active img"
         ).src;
      }, 300);

      setTimeout(() => {
         albumBg.classList.remove("animeBg");
      }, 700);
   }

   function changeBgColor() {
      var getColor = document.querySelector(
         ".slider-one .swiper-slide-active .albumCover"
      ),
          activeColor = getColor.style.backgroundColor;

      setTimeout(() => {
         bodyBg.style.backgroundColor = activeColor;
      }, 200);
   }

   // Music Groups

   for (let i = 0; i < groups.length; i++) {
      const { title, img } = groups[i];

      var template2 = `<div class="swiper-slide group">
<figure><img src="${img}"></figure>
<p class = "titleGroup">${title}</p>
</div>`;

      musicGroups.insertAdjacentHTML("beforeend", template2);
   }

   // Add favourites & Playlist

   const heart = document.querySelectorAll(".heart"),
         plus = document.querySelectorAll(".plus"),
         close = document.querySelectorAll(".close"),
         playlist = document.querySelectorAll(".playlist");

   heart.forEach(function(el) {
      el.addEventListener("click", addFave);
   });

   plus.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   close.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   playlist.forEach(function(el) {
      el.addEventListener("click", addPlaylist);
   });

   function addFave(e) {
      if (e.currentTarget.classList.contains("fave")) {
         e.currentTarget.classList.remove("fave");
      } else {
         e.currentTarget.classList.add("fave");
      }
   }

   function openPlaylists(e) {
      if (
         e.currentTarget
         .closest(".swiper-slide-active")
         .classList.contains("open")
      ) {
         e.currentTarget
            .closest(".swiper-slide-active")
            .classList.remove("open");
      } else {
         e.currentTarget.closest(".swiper-slide-active").classList.add("open");
      }
   }

   function closePlaylists() {
      document.querySelector(".swiper-slide-active").classList.remove("open");
   }

   function addPlaylist(e) {
      if (e.currentTarget.classList.contains("selected")) {
         e.currentTarget.classList.remove("selected");
      } else {
         e.currentTarget.classList.add("selected");
      }
   }

   // Song Progress Bar

   function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
   }

   function progressBar() {
      var songDuration = document.querySelector(".swiper-slide-active audio")
      .duration,
          endTime = document.querySelector(".endTime"),
          songAudio = document.querySelector(".swiper-slide-active audio"),
          currentTime = document.querySelector(".currentTime");

      endTime.innerHTML = formatTime(songDuration);

      songAudio.ontimeupdate = function() {
         var progress = document.querySelector(".progress");
         progress.style.width =
            songAudio.currentTime * 100 / songDuration + "%";
         currentTime.innerHTML = formatTime(songAudio.currentTime);
      };
   }

   ////////////////
   // Call Functions
   ////////////////

   changeBg();
   progressBar();
   changeBgColor();

   wrapper.style.height = window.innerHeight + "px";

   console.log(window.innerHeight);
});
