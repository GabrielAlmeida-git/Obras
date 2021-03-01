import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

 class adicionarObra extends Component {

  constructor(props){
    super(props);
    this.state = {
      nomeObra: '',
      endereco: '',
      cliente: '',
      dataInicio: '',
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
    firebase.database().ref('Obras')

    let obras = firebase.database().ref('Obras');
    let chave = obras.push().key;
    obras.child(chave).set({
      nomeObra: this.state.nomeObra,
      endereco: this.state.endereco,
      cliente: this.state.cliente,
      dataInicio: this.state.dataInicio
    })

    e.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <button onClick={this.handleClick}>Adicionar obra</button>
        { this.state.mostrarComponente && <FormObra>
            <form onSubmit={this.cadastrar}>
              <FormHidden>
              <Description>
              <div>Nome da obra:</div>
              <div>Endereço da obra: </div>
              <div>Cliente: </div>
              <div>Data de início: </div>
              </Description>
              <TextBoxes>
              <div><input type="text" value={this.state.nomeObra} onChange={(e) => this.setState({nomeObra: e.target.value})}/></div>
              <div><input type="text" value={this.state.endereco} onChange={(e) => this.setState({endereco: e.target.value})}/></div>
              <div><input type="text" value={this.state.cliente} onChange={(e) => this.setState({cliente: e.target.value})}/></div>
              <div><input type="text" value={this.state.dataInicio} onChange={(e) => this.setState({dataInicio: e.target.value})}/></div>
              <button type="submit">Cadastrar obra</button>
              </TextBoxes>
              </FormHidden>
            </form>
        </FormObra> }
        
      </Wrapper>
    )
  }
}

export default adicionarObra

const Wrapper = styled.div`
margin-top: 1.0rem;
`

const FormObra = styled.div`

`

const FormHidden = styled.div`
display:flex;`

const Description = styled.div`` 


const TextBoxes = styled.div`
padding-left: 1.5rem;
`
