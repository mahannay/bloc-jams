//Example Album
var albumPicasso = {
  title: "The Colors",
  artist: "Pablo Picasso",
  label: "Cubism",
  year: "1881",
  albumArtUrl: "assets/images/album_covers/01.png",
  songs: [
    { title: "Blue", duration: "4:26" },
    { title: "Green", duration: "3:14" },
    { title: "Red", duration: "5:01" },
    { title: "Pink", duration: "3:21"},
    { title: "Magenta", duration: "2:15"}
  ]
};

// Another Example Album
var albumMarconi = {
  title: "The Telephone",
  artist: "Guglielmo Marconi",
  label: "EM",
  year: "1909",
  albumArtUrl: "assets/images/album_covers/20.png",
  songs: [
    { title: "Hello, Operator?", duration: "1:01" },
    { title: "Ring, ring, ring", duration: "5:01" },
    { title: "Fits in your pocket", duration: "3:21" },
    { title: "Can you hear me now?", duration: "3:14" },
    { title: "Wrong phone number", duration: "2:15" },
  ]
};

var albumDurham = {
  title: "Bull City",
  artist: "Durhamites",
  label: "North Carolina",
  year: "1869",
  albumArtUrl: "assets/images/album_covers/06.png",
  songs: [
    {title: "Loud, loud train", duration: "4:34"},
    {title: "Have you seen the new brewery?", duration: "3:21"},
    {title: "Exam week coffee shops", duration: "2:09"},
    {title: "Meet me at the food truck rodeo", duration: "3:13"},
    {title: "Gentrification guilt", duration: "4:32"},
  ]
}

var blocAlbums = [albumPicasso, albumMarconi, albumDurham];

var createSongRow = function(songNumber, songName, songLength) {
  var template =
  '<tr class="album-view-song-item">'
+     '<td class="song-item-number">' + songNumber + '</td>'
+     '<td class="song-item-title">' + songName + '</td>'
+     '<td class="song-item-duration">' + songLength + '</td>'
+ '</tr>'
;

    return template;
};

var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

var currentAlbum = function(albumList) {
  var theTitle = document.getElementsByClassName('album-view-title')[0].innerText;
  var i = 0;
  while ( i < albumList.length) {
    if (theTitle == albumList[i]["title"]) {
      return i;
    }
    i+=1;
  }
};


var doToggle = function() {
  var i = currentAlbum(blocAlbums);
  if (i < blocAlbums.length-1) {
  setCurrentAlbum(blocAlbums[i + 1]);
  }
else {
  setCurrentAlbum(blocAlbums[0]);
}
}
window.onload = function() {
    setCurrentAlbum(albumPicasso);
};
document.getElementsByClassName("album-cover-art")[0].addEventListener("click", doToggle);
