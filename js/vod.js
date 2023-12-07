var youtube_flag = 0;
var tag = document.createElement('script');

if (document.location.protocol == 'http:') {
	tag.src = "http://www.youtube.com/iframe_api";
}else {
	tag.src = "https://www.youtube.com/iframe_api";
}

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videoId1 = 'LEAhIATEP_g';
var videoId2 = '7NDuUs5rgGA';
var videoId3 = 'bC0-ATmfxN4';

//if(strNowDate > '20180722') videoId = 'BZWcrU2lwLU';

// 3. This function creates an <iframe> (and YouTube player)  after the API code downloads.
var player1, player2 , player3= '';
function onYouTubeIframeAPIReady() {
	player1 = new YT.Player('player1', {
		height: '100%',
		width: '100%',
		videoId: videoId1,   //,
		playerVars: {'wmode':'opaque','controls':0,'autoplay':0,'rel':0,'loop':0,'showsearch':0,'playsinline':0,'showinfo':0,'modestbranding':1,'start':0,'enablejsapi':1},
		events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
		}
	});

	player2 = new YT.Player('player2', {
		height: '100%',
		width: '100%',
		videoId: videoId2,   //,
		playerVars: {'wmode':'opaque','controls':0,'autoplay':0,'rel':0,'loop':0,'showsearch':0,'playsinline':0,'showinfo':0,'modestbranding':1,'start':0,'enablejsapi':1},
		events: {
		'onReady': onPlayerReady,
		'onStateChange': onPlayerStateChange
		}
	});

    player3 = new YT.Player('player3', {
        height: '100%',
        width: '100%',
        videoId: videoId3,   //,
        playerVars: {'wmode':'opaque','controls':0,'autoplay':0,'rel':0,'loop':0,'showsearch':0,'playsinline':0,'showinfo':0,'modestbranding':1,'start':0,'enablejsapi':1},
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
}

// 로딩시 작업
function onPlayerReady(event) {
  // event.target.playVideo();
  // 로딩 되면서 바로 시작할때 호출 ...
}

function onPlayerStateChange(event) {
  	  var playerState1 = player1.getPlayerState();
	  var playerState2 = player2.getPlayerState();
      var playerState3 = player3.getPlayerState();

	  if(playerState1 == 1){  // 1은 시작 0은 끝
		 gtag('event', 'link', {'event_category': device, 'event_label':'동영상보기1' });
         fn_edge_ga('동영상보기1');
		 player2.pauseVideo();
         player3.pauseVideo();
	  } //  1's end

	  if(playerState2 == 1){  // 1은 시작 0은 끝
		   gtag('event', 'link', {'event_category': device, 'event_label':'동영상보기2' });
           fn_edge_ga('동영상보기2');
		   player1.pauseVideo();
           player3.pauseVideo();
	  } //  1's end

      if(playerState3 == 1){  // 1은 시작 0은 끝
           gtag('event', 'link', {'event_category': device, 'event_label':'동영상보기3' });
            fn_edge_ga('동영상보기3');
           player1.pauseVideo();
           player2.pauseVideo();
     } //  1's end

	  if(playerState1 == 0){
		  player1.cueVideoById({'videoId': videoId1 });
	  }
	  if(playerState2 == 0){
	      player2.cueVideoById({'videoId': videoId2 });
	  }
      if(playerState3 == 0){
	      player3.cueVideoById({'videoId': videoId3 });
	  }

}
