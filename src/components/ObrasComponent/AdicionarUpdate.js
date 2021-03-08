import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

export default class AdicionarUpdate extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      update: '',
      cliente: '',
      dataInicio: '',
      url: window.location.href.split(':')
    }
    this.cadastrar = this.cadastrar.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
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
    
  }


  handleClick() {
    this.setState(prevState => ({
      mostrarComponente: !prevState.mostrarComponente
    }));
}


cadastrar(e){
  firebase.database().ref('Obras/'+this.state.url[3]).child('updates')

  let obras = firebase.database().ref('Obras/'+this.state.url[3]).child('updates');
  let chave = obras.push().key;
  obras.child(chave).set({
    data: this.state.data,
    update: this.state.update,
    cliente: this.state.cliente,
    dataInicio: this.state.dataInicio
  })

  e.preventDefault();
}

  render() {
    return (
      <Wrapper>
        <button onClick={this.handleClick}>Adicionar update</button>
        { this.state.mostrarComponente && <FormObra>
            <form onSubmit={this.cadastrar}>
              <FormHidden>
              <Description>
              <div>Data:</div>
              <div>Update: </div>
              <div>Cliente: </div>
              <div>Data de início: </div>
              </Description>
              <TextBoxes>
              <div><input type="text" value={this.state.data} onChange={(e) => this.setState({data: e.target.value})}/></div>
              <div><input type="text" value={this.state.update} onChange={(e) => this.setState({update: e.target.value})}/></div>
              <div><input type="text" value={this.state.cliente} onChange={(e) => this.setState({cliente: e.target.value})}/></div>
              <div><input type="text" value={this.state.dataInicio} onChange={(e) => this.setState({dataInicio: e.target.value})}/></div>
              <button type="submit">Cadastrar update</button>
              </TextBoxes>
              
              </FormHidden>
            </form>
        </FormObra> }
      </Wrapper>
    )
  }
}



const Wrapper = styled.div``

const FormObra = styled.div``

const FormHidden = styled.div`
display:flex;
`

const Description = styled.div``

const TextBoxes = styled.div``
