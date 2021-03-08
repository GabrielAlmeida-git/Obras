import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';
import AdicionarUpdate from './AdicionarUpdate';

class ObraUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: window.location.href.split(':'),
      updates:[]
    }
    
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

  
    
      firebase.database().ref('Obras/'+this.state.url[3]).child('updates').on('value', (snapshot) =>{
        let state = this.state;
        state.updates = [];
        snapshot.forEach((childItem)=> {
          state.updates.push({
            key: childItem.key,
            update: childItem.val().update,
            data: childItem.val().data
          })
        });
        this.setState(state);
      })
}
  render() {
    return (
      <Wrapper>
      <div>Visão Geral / Atualizações</div>
      <AdicionarUpdate/>
          <Main>
          {this.state.updates.map((item)=>{
            return(
              <Updates key={item.data}>
                <UpdateTab>
                  <div>
                    Atualização do dia: {item.data}
                  </div>
                  <div>
                    Descrição: {item.update}
                  </div>
                </UpdateTab>
                <ButtonTab>
                    <button>Ver Fotos</button>
                </ButtonTab>
              </Updates>
            )
          })}
            </Main>
    </Wrapper>
     
    )
  }
}

export default ObraUpdate


const Wrapper = styled.div`
`

const Main = styled.div`
margin-bottom: 1.5rem;
margin-top: 2rem;
` 

const Updates = styled.div`
display: flex;
justify-content: space-between;
border-radius: 12px;
border-style: outset;
padding-left: 1rem;
padding-right: 1rem;
margin-top: 1rem;
height auto;
align-items: center;
background: white;
`

const UpdateTab = styled.div`

`


const ButtonTab = styled.div`
button{
  border-radius: 2px;
  background: #239C7B;
}
`
