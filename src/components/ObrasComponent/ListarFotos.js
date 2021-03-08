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
    
    firebase.database().ref('images/'+this.state.url[3]).on('value', (snapshot) =>{
      let state = this.state;
      state.images = [];
      snapshot.forEach((childItem)=> {
        state.images.push({
          imageUrl: childItem.val().imageUrl,
          data: childItem.val().data,
        })
      });
      this.setState(state);
    })
    

  }

  onFileChange = async (e) => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref(this.state.url[3])
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    const imageUrl = await fileRef.getDownloadURL();
    this.setState({fileUrl: imageUrl})
    console.log(imageUrl)

   
  }

  onSubmit = (e) => {
    e.preventDefault()
    let images = firebase.database().ref("images/"+this.state.url[3]).child(this.state.data);
    images.set({
      data: this.state.data,
      imageUrl: this.state.fileUrl
    })
  }
  render() {
    return (
      <Wrapper>
        <Header>
         FOTOS
        </Header>
        <form onSubmit={this.onSubmit}>
          <input type="file" onChange={this.onFileChange} />
          <input type="text" name="data"  placeholder="DATA" value={this.state.dataInicio} onChange={(e) => this.setState({data: e.target.value})}/>
          <button>Adicionar</button>
        </form>
       <Fotos>
          {this.state.images.map((item) => {
            return(
              <FotoList key={item.data}>
                <img src={item.imageUrl} alt="foto do dia"/>
                <p>{item.data}</p>
              </FotoList>
            )
          })}
       </Fotos>
      </Wrapper>
    )
  }
}



const Wrapper = styled.div`

`
const Header = styled.div`
height: auto;
background: #239C7B;
text-align: center;
font-size: 1.2rem;
`

const Fotos = styled.div`
display: flex;
flex-direction: row;
@media(max-width: 800px) {
  flex-direction: column;
  position: relative;
  text-align: center;
}
  ` 

const FotoList = styled.div`
@media(max-width: 800px) {
  margin-left: 0;
}
margin-left: 1.0rem;
margin-top:1.0rem;
p{
  text-align: center;
}
img{
  width: 200px;
  height: 200px;
}
`

