

![image](https://github.com/user-attachments/assets/a81da228-e643-4b6a-8e16-c62cea7dd62f)








Algorithm:

1:Initialize Elements and Variables
Identify and store references to the DOM elements (e.g., play, next, shuffle buttons) and initialize global variables for song control.

2:Load a Song
Define a loadMusic() function that updates the song source, title, artist, and cover image based on the current song index.

3:Play and Pause Music
Implement playMusic() and pauseMusic() functions to toggle between playing and pausing the music based on the isPlaying state.

4:Attach Button Event Listeners
Use addEventListener() to bind play, next, previous, and shuffle buttons with their respective functions for controlling music playback.

5:Change Song
Create a changeMusic() function that changes the song based on the current index or plays a random song if shuffle mode is active.

6:Progress Bar Update
Add an event listener to the music object to update the progress bar dynamically as the song plays using timeupdate.

7:Seek Functionality
Attach a click event to the progress bar, allowing users to seek within the song by clicking on the progress bar and calculating the new time.

8:Shuffle Mode
Implement a shuffle toggle using a toggleShuffle() function that switches between sequential and random song order.

9:Responsive Design
Use CSS media queries to adjust the layout for smaller screens, resizing elements such as the music controls and player image.

10:Random Background Color
Generate a random background color on each page load using a randomBgColor() function without altering the song's cover image.








