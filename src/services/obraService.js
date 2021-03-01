import firebase from 'firebase';
import React, { Component } from 'react';

 class obraService extends Component {

  constructor(props){
    super(props);
    this.state = {
      obras:[]
    };

    let firebaseConfig = {
      apiKey: "AIzaSyDf7uwGiMEoFMvWxmKz04RiI4S390NCaQM",
      authDomain: "certaengenharia-686f0.firebaseapp.com",
      projectId: "certaengenharia-686f0",
      storageBucket: "certaengenharia-686f0.appspot.com",
      messagingSenderId: "802163980988",
      appId: "1:802163980988:web:fc27258d26c36b11246eb9",
      measurementId: "G-LLTNHYXQ83"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    firebase.database().ref('Obras').on('value', (snapshot) =>{
      let state = this.state;
      state.obras = [];
      snapshot.forEach((childItem)=> {
        state.obras.push({
          key: childItem.key,
          nome: childItem.val().nomeObra,
          endereco: childItem.val().endereco
        })
      });
      this.setState(state);
    })
  
    
  }
  render() {
    
    return (
      <div>
        {this.state.obras.map((item)=>{
          return(
            <div>
              <h1>{item.nome}</h1>
              <h1>{item.endereco}</h1>
              </div>
          )
        })}
      </div>
    )
  }
}

export default obraService
