// Select all the elements in the HTML page
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let volume_slider = document.querySelector(".volume_slider");


// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "Fur Elise",
	artist: "BeethOven",
	image: "FurElise.jpg",
	path: "FurElise.mp3"
},
{
	name: "Best Mistake",
	artist: "Prod. Lee",
	image: "BestMistake.jpg",
	path: "Best Mistake.mp3"
},
{
	name: "Calling",
	artist: "Prod. Lee",
	image: "Calling.jpg",
	path: "Calling.mp3",
},
];

function loadTrack(track_index) {
    // Load a new track
    curr_track.src = track_list[track_index].path;
    curr_track.load();
    
    // Update details of the track
    track_art.style.backgroundImage =
        "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent =
        "PLAYING " + (track_index + 1) + " OF " + track_list.length;
    
    // Move to the next track if the current finishes playing
    curr_track.addEventListener("ended", nextTrack);
    }

    function playpauseTrack() {
        // Switch between playing and pausing
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
            
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
            
        function setVolume() {
        // Set the volume according to the
        curr_track.volume = volume_slider.value / 100;
        }
        window.addEventListener("keydown",keypr,false);

        function keypr(key){
            if(key.keyCode == 32){
                playpauseTrack()
            }
            if(key.keyCode == 39){
                nextTrack()
            }
            if(key.keyCode == 37){
                prevTrack()
            }
        }

        // Load the first track in the tracklist
        loadTrack(track_index);
            