const firebaseConfig = {
    apiKey: "AIzaSyCahXwr-tvdJwhSpG3XoYlG14hEEbOZtvE",
    authDomain: "notepad-f4769.firebaseapp.com",
    projectId: "notepad-f4769",
    storageBucket: "notepad-f4769.appspot.com",
    messagingSenderId: "918341125618",
    appId: "1:918341125618:web:3bf6e3a3ebcd6f8fb1576b",
    measurementId: "G-PY6GN1T54T",
    databaseURL: "https://notepad-f4769-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const noteRef = database.ref('note');

const noteTextarea = document.getElementById('note');
const saveBtn = document.getElementById('saveBtn');

noteRef.on('value', (snapshot) => {
    noteTextarea.value = snapshot.val() || '';
});

saveBtn.addEventListener('click', () => {
    noteRef.set(noteTextarea.value).then(() => {
        console.log('Data saved');
    }).catch((error) => {
        console.error('Error saving data:', error);
    });
});