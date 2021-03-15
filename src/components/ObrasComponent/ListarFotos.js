import firebase from 'firebase';
import React, { Component } from 'react';
import styled from 'styled-components';

export default class ListarFotos extends Component {
  constructor(props){
    super(props);
    this.state = {
      fileUrl: '',
      setFileUrl: '',
      data: '',
      setData: '',
      description: '',
      url: window.location.href.split(':'),
      images: []
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
    
    firebase.database().ref('images/'+this.state.url[2]).on('value', (snapshot) =>{
      let state = this.state;
      state.images = [];
      snapshot.forEach((childItem)=> {
        state.images.push({
          imageUrl: childItem.val().imageUrl,
          data: childItem.val().data,
          description: childItem.val().description,
        })
      });
      this.setState(state);
    })


  }

  onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(this.state.url[2])
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    const imageUrl = await fileRef.getDownloadURL();
    this.setState({fileUrl: imageUrl})
    console.log(imageUrl)
    let date = new Date().toLocaleString();
    let dataCorrigida = date.replaceAll('/', '-')
    this.setState({data: dataCorrigida})
   
  }

  onSubmit = (e) => {
    e.preventDefault()
    
    
    let images = firebase.database().ref("images/"+this.state.url[2]).child(this.state.data);
    images.set({
      data: this.state.data,
      imageUrl: this.state.fileUrl,
      description: this.state.description
    })
  }

  
  render() {
    return (
      <Wrapper>
        <Header>
         FOTOS
        </Header>
        <form onSubmit={this.onSubmit}>
        <Form>
          <div><label for="arquivo">Selecionar arquivo</label><input type="file" id="arquivo" name="arquivo" onChange={this.onFileChange} /></div>
          <div><input type="text" name="data"  placeholder="DESCRIÇÃO" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/></div>
          <div><button>Adicionar</button></div>
          </Form>
        </form>
        
       <Fotos>
          {this.state.images.map((item) => {
            return(
              <FotoList key={item.data}>
                <div><img src={item.imageUrl} alt="foto do dia"/></div>
                <div>Data: {item.data}<p>{item.description}</p></div>
              </FotoList>
            )
          })}
       </Fotos>
      </Wrapper>
    )
  }
}



const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
font-weight: bold;
font-family: bree serif;
font-size: 15px;
`
const Header = styled.div`
height: 2.5rem;
background: #FFF;
color: #006666;
text-align: center;
font-weight: bold;
font-family: bree serif;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
`

const Form = styled.div`
margin-top: 1.5rem;
display: flex;
justify-content: space-between;
@media(max-width: 800px) {
  flex-direction: column;
}
button{
  background: #FFF;
  height: 2.5rem;
  width: 10rem;
  color: #006666;
}
input{ 
  background: #FFF;
  height: 2.5rem;
  width: 10rem;
  color: #006666;
}
input[type="file"]{
display: none;
}
label{
  color: #006666;
  height: 2.5rem;
  background: #FFF;
  border: groove;
}

` 

const Fotos = styled.div`
display: flex;
flex-direction: column;

  ` 

const FotoList = styled.div`
display: flex;
align-items: center;
@media(max-width: 800px) {
  margin-left: 0;
}
margin-left: 1.0rem;
margin-top:1.0rem;
p{
  text-align: center;
}
img{
  width: 400px;
  height: 250px;
  margin-right: 1.5rem;
}
`

