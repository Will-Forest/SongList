window.onload = loadList;
var current = 0;
var allSongs = [];
//Prototype for Song objects
function Song(title,artist,album,year,listened)
{
  this.song = title;
  this.artist = artist;
  this.album = album;
  this.year = year;

  this.toString = function(){
    return title + " by " + artist;
  }
  this.releaseInfo = function(){
    return "Released on " + album + " in " + year;
  };
  this.listened = listened;
  this.play = function(){
    listened++;
  };
}
//Adds new instances of songs to the list
function loadList()
{
  allSongs.push(new Song("Hey Jude","The Beatles","Let It Be",1970,0));
  allSongs.push(new Song("Lodi Dodi","Snoop Dogg","Doggystyle",1993,0));
  allSongs.push(new Song("Get Lucky","Daft Punk","Random Access Memories",2013,0));
  allSongs.push(new Song("Inevitable","Shakira","Dónde Están los Ladrones?",1998,0));
  allSongs.push(new Song("Wagon Wheel","Old Crow Medicine Show","Old Crow Medicine Show",2004,0));
}
//Progresses to the next song to the list, or if the end of the list has been
//reached, then loop back to the beginning
function nextSong()
{
  displaySong();
  current = (current+1)%allSongs.length;
}

//Show song's information in the "nowPlaying" span
function displaySong()
{
  allSongs[current].listened++;
  document.getElementById("nowPlaying").innerHTML = allSongs[current].toString() + ", which has been listened to " + allSongs[current].listened + " times.";
}
