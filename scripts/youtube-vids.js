var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayerManager = (function YTPlayerManager() {
  var players = [],
      PLAYING = 1;

  function register(id) {
    players.push({
      id: id,
      player: makePlayer(id)
    });
  }


  function makePlayer(id) {
      return new YT.Player(id, {
       // host: 'https://www.youtube.com',
       
        events: {
          'onStateChange': function(event) {
            if(event.data == PLAYING) {
              videoPlaying(id);
            }
          }
        }
      });
  }

  function videoPlaying(id) {
    players.forEach(function(item) {
      if(item.id !== id) {
        item.player.pauseVideo();
      }
    });
  }

  return { register };
})();

function onYouTubeIframeAPIReady() {
    //console.log("WEINDISBISH");
    ytPlayerManager.register('weco1');
    ytPlayerManager.register('weco2');
    ytPlayerManager.register('weco3');
    ytPlayerManager.register('weco4');
    ytPlayerManager.register('anb1');
    ytPlayerManager.register('anb2');
    ytPlayerManager.register('anb3');
    ytPlayerManager.register('lakewood1');
    ytPlayerManager.register('lakewood2');
    ytPlayerManager.register('lakewood3');
    ytPlayerManager.register('lakewood4');
//   ytPlayerManager.register('video2');
//   ytPlayerManager.register('video3');
}