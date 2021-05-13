 var firebaseConfig = {
    apiKey: "AIzaSyCBBElMIOXrOt_GwsS9QGi0GbJHKLKthPE",
    authDomain: "tic-tac-toe-game-8a123.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-game-8a123-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-game-8a123",
    storageBucket: "tic-tac-toe-game-8a123.appspot.com",
    messagingSenderId: "966894923267",
    appId: "1:966894923267:web:0526a2dda378cf3dcca836",
    measurementId: "G-P129NQLKXK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});

localStorage.setItem("user_name", user_name);
  
   window.location = "kwitter_room.html";
}

