  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDl6tkbL7t4A1drwmr5xN1N3L9O3S_npO8",
    authDomain: "lesson-8-7d3f1.firebaseapp.com",
    databaseURL: "https://lesson-8-7d3f1-default-rtdb.firebaseio.com",
    projectId: "lesson-8-7d3f1",
    storageBucket: "lesson-8-7d3f1.firebasestorage.app",
    messagingSenderId: "516543447580",
    appId: "1:516543447580:web:4d06ddcc34e057171255d9",
    measurementId: "G-VG8MJ9CLEQ"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  function addItem(){
    const task= document.getElementById("task").value;
    db.ref ("/").child(task).update({
      purpose: "adding message"
    });
    db.ref("/").on("value", function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
        const childKey = childSnapshot.key;
        const item = childKey;
        row = "<div>" + item + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    })
  }