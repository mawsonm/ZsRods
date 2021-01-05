/*var firebaseConfig = {
    apiKey: "AIzaSyB8flqkTgvw8i6CtaQQ-FV7vdMGuGkTvwE",
    authDomain: "z-s-rods.firebaseapp.com",
    databaseURL: "https://z-s-rods-default-rtdb.firebaseio.com",
    projectId: "z-s-rods",
    storageBucket: "z-s-rods.appspot.com",
    messagingSenderId: "551381686100",
    appId: "1:551381686100:web:2adb40ce85af9f1e59dac1",
    measurementId: "G-0RL3WY7HQQ"
  };

  firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
*/
var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    limit: 4,
      resolution: 'low_resolution',
      template: '<div class="col-lg-2 col-md-6"><a href="{{link}}"><img title="{{caption}}" src="{{image}}" class="img-fluid" /></a></div>',
    accessToken: 'IGQVJXMzZAiQkhmYmlCTGZAMZAEhnSVZApX2RrcmwwTnBMZAEdJZAXNxWVJOV2REUzZAYOFA3UTZAka2FGcWNKMkl4REFvaFQyLUdmTjJDNlJoNUhRNklBWWN1b3R5M2drTkVDTTV0YzVrT2MwUUtaNFE5b2ZAQWAZDZD'
  });
  userFeed.run();
