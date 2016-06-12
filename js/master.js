window.onload = function() {
      initialize();
      }
       
      function initialize() {
      var myLatlng = new google.maps.LatLng(24.368609, 88.590102);
       
      var myOptions = {
      zoom: 15,
      scrollwheel:  false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"water","elementType":"all","stylers":[{"color":"#3b5998"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"all","stylers":[{"hue":"#3b5998"},{"saturation":-22}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f7f7f7"},{"saturation":10},{"lightness":76}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"color":"#f7f7f7"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"color":"#8b9dc3"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"},{"color":"#3b5998"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#8b9dc3"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#8b9dc3"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"invert_lightness":false},{"color":"#ffffff"},{"weight":0.43}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#8b9dc3"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#3b5998"}]}]
      }
       
      var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
       
      var infowindow = new google.maps.InfoWindow({
      content: ""
      });
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">OnePixMedia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>H.N:26</b>, ' +
      '<b>EhsanManzil</b> '+
      '<b>SheikhPara, Boalia, G.P.O:6000, Rajshahi</b>'+
      '</div>'+
      '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
       
      var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: "OnePixMedia"
      });
       
      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
      });
}

// Typed Js
  $(function(){
    $(".element").typed({
      strings: ["Welcome. ^1000", "This is OnePixMedia.^2000"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 200,
      // time before typing starts
      startDelay: 0,
      // backspacing speed
      backSpeed: 0,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: "",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
  });


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});