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
  firebase.database().ref('Obras/'+this.state.url[2]).child('updates')

  let obras = firebase.database().ref('Obras/'+this.state.url[2]).child('updates');
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
              <TextBoxes>
              <div><Label>Data: </Label><input type="text" value={this.state.data} onChange={(e) => this.setState({data: e.target.value})}/></div>
              <div><Label>Update: </Label><input type="text" value={this.state.update} onChange={(e) => this.setState({update: e.target.value})}/></div>
              <div><Label>Teste: </Label><input type="text" value={this.state.cliente} onChange={(e) => this.setState({cliente: e.target.value})}/></div>
              <div><Label>Teste: </Label><input type="text" value={this.state.dataInicio} onChange={(e) => this.setState({dataInicio: e.target.value})}/></div>
              <Submit><button type="submit">Cadastrar update</button></Submit>
              </TextBoxes>
              </FormHidden>
            </form>
        </FormObra> }
      </Wrapper>
    )
  }
}



const Wrapper = styled.div`
margin-top: 1.0rem;
button{
  border-radius: 5px;
  background: #FFF;
  color: #006666;
  height: 2.5rem;
  border: none;
}


`

const FormObra = styled.div`
justify-content: center;
align-items: center; 
display:flex;
flex-direction: row;
`

const FormHidden = styled.div`
display:flex;
background: white;
margin-top: 1.5rem;
background: white;
border-style: groove; 
border-radius: 2px;
width: auto;
height: 200px;
align-items: center; 
justify-content: center;
padding-left: 1.5rem;
padding-right: 1.5rem;
padding-top: 1.5rem;
padding-bottom: 1.5rem;
`


const TextBoxes = styled.div`

`

const Label = styled.div`
color: #239C7B;
font-weight: bold;`

const Submit = styled.div`
margin-top: 0.5rem;
`

