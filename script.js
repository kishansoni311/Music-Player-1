var songs = document.querySelectorAll('audio');
var songName = document.querySelector('#songName');
var playPauseBtn = document.querySelector('#btn3');
var backBtn = document.querySelector('#btn2');
var forwardBtn = document.querySelector('#btn4');

var numOfSongs = 0;
var templete = ``;
var prevSong = 0;

function showSong(){
    songs.forEach(function(song, index){
        numOfSongs++;
        templete += `<div id="song">
                    <h3>${song.getAttribute('src')}</h3>
                    <h5>Prateek S.S.</h5>
                    <button id = "${index}">Play</button>
                    </div>`;
    });
    
    document.querySelector('#right').innerHTML = templete;
}

function stopSong(indexOfSong, val){
    if(val === 1){
        songs[indexOfSong].currentTime = 0;
    }
    songs[indexOfSong].pause();
    // val use for - stopSong funtion calling from where
    // 1 means - stopSong funtion calling form right side
    // 0 means - stopSong funtion calling from playPause btn
}

function playSong(indexOfSong){
    songs[indexOfSong].play();
    btn3.innerHTML = `<i class="ri-pause-fill"></i>`;
}

var playPauseBtnStatus = 0;
function playPause(){
    if(playPauseBtnStatus === 0){
        playSong(prevSong);
        btn3.innerHTML = `<i class="ri-pause-fill"></i>`;
        playPauseBtnStatus = 1;
    }
    else{
        stopSong(prevSong, 0);
        btn3.innerHTML = `<i class="ri-play-fill"></i>`;
        playPauseBtnStatus = 0;
    }
}

playPauseBtn.addEventListener('click', function(){
    playPause();
});

document.querySelector('#right').addEventListener('click', function(dts){
    var crntSong = Number(dts.target.id);
    stopSong(prevSong, 1);
    prevSong = crntSong;
    playSong(crntSong);
    songName.textContent = songs[crntSong].getAttribute('src');
});

//this code for playing backword song
backBtn.addEventListener('click', function(){
    if(prevSong > 0){
        stopSong(prevSong, 1);
        prevSong = prevSong - 1;
        playSong(prevSong);
        songName.textContent = songs[prevSong].getAttribute('src');
    }
});

forwardBtn.addEventListener('click', function(){
    if(prevSong < numOfSongs - 1){
        stopSong(prevSong, 1);
        prevSong = prevSong + 1;
        playSong(prevSong);
        songName.textContent = songs[prevSong].getAttribute('src');
    }
});

showSong();