import React, { Component, useEffect, useState , useRef } from 'react'

import Picture from './Picture';


export default function Pictures() {

  // const [myTimer, setMyTimer]  = useState(null);

  const [images, setImages] = useState([
    'technology1.jpg',
    'technology2.jpg',
    'technology3.jpg',
    'technology4.jpg'
  ]);

  const [image, setImage] = useState(null);

  function ImagesComponent() {
    return images.map( (name, index) => <Picture 
    imageName={name} 
    index={index}
    key={index}
    handleRemove={handleRemoveImage}
    />);
  }

  function handleRemoveImage(index) {
    setImages(images.filter( (image, i) => i != index ));
  }

  function handleImageName(event) {
    setImage(event.target.value)
  }

  function addImageName () {
    let newImages = [image,... images];
    setImages(newImages);
  }

  // useEffect( ()=> {

  //   const myTimer = setInterval(() => {
  //     console.log('Tmer appé');
  //   }, 1000);

  //   return () => clearInterval(myTimer);
  // }, []);

  const inputToFocus = useRef(null);
  useEffect( () =>{
    inputToFocus.current.focus()
  });

  return (
    <div className="container mx-auto">
      <div className='flex item-center justify-between'>
        <ImagesComponent />
      </div>
      <div className='mt-5' >
        <input ref={ inputToFocus } type="text" className='border border-gray-600 shadow rounded p-3 mr-2 outline-none' onChange={handleImageName} />
        <button type="submit" className='bg-purple-400 text-white rounde p-3' onClick={addImageName}>Inscrire le nom d'une image</button>
      </div>
    </div>
  )
}



// export default class Picture extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {timer: null};
//   }

//   componentDidMount() {
//     this.setState({
//       timer: setInterval( () => {
//         console.log('Timer appelé');
//       }, 1000)
//     });
//   }

//   componentWillUnmount() {
//     console.log('Composant Picture est démonté');
//     clearInterval(this.state.timer);
//   }

//   render() {
//     return (
//       <img className='w-40 mx-auto' src='logo512.png'></img>
//     )
//   }
// }
