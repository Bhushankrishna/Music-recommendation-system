const musicDatabase = {
  happy: [
    { title: "Happy - Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { title: "Can’t Stop the Feeling - Justin Timberlake", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" }
  ],
  sad: [
    { title: "Someone Like You - Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { title: "Let Her Go - Passenger", link: "https://www.youtube.com/watch?v=RBumgq5yVrA" }
  ],
  energetic: [
    { title: "Believer - Imagine Dragons", link: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
    { title: "Eye of the Tiger - Survivor", link: "https://www.youtube.com/watch?v=btPJPFnesV4" }
  ],
  chill: [
    { title: "Sunflower - Post Malone", link: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
    { title: "Lovely - Billie Eilish & Khalid", link: "https://www.youtube.com/watch?v=V1Pl8CzNzCw" }
  ]
};

function recommendMusic() {
  const mood = document.getElementById("moodSelect").value;
  const recommendationsDiv = document.getElementById("recommendations");

  recommendationsDiv.innerHTML = "";

  if (!mood) {
    recommendationsDiv.innerHTML = "<p>Please select a mood!</p>";
    return;
  }

  const songs = musicDatabase[mood];
  recommendationsDiv.innerHTML = `<h3>Recommended Songs:</h3>`;
  
  songs.forEach(song => {
    const link = document.createElement("a");
    link.href = song.link;
    link.textContent = song.title;
    link.target = "_blank";
    link.style.display = "block";
    link.style.color = "yellow";
    recommendationsDiv.appendChild(link);
  });
}
