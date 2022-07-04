import React, {useEffect, useRef, useState} from 'react';
import Picture from './component/Pictures';
  

function App () {

  const [title, setTitle] = useState('Coucou les amis');
  const [show, setShow] = useState(false);
  const isShowInitialize = useRef(false);

  useEffect( () => console.log('Composant App Monté'), []);
  useEffect( () => {
    if (isShowInitialize.current) {
      console.log('Show mis à jour');
    } else {
      isShowInitialize.current =true;
    }
  }, [show]);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div>{console.log('JSX Render')}
      <h1 className="text-4xl text-purple-700 my-5">{title}</h1>
      <button className="bg-purple-900 text-white roundes py-2 px-3" onClick={handleClick}>Click!</button>
      { show ? <Picture /> :null }
    </div>
  );
}

// class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {show: false, title: 'Coucou les amis'};
//   }
  
//   componentDidMount() {
//     // this.setState({title: 'Le composant a bien été monté'});
//   }

//   componentDidUpdate() {
//     console.log('Composant mis à jour');
//   }

//   render() {
//     return <div>
//       <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
//       <button className="bg-purple-900 text-white roundes py-2 px-3" onClick={() => this.setState ({show: !this.state.show})}>Click!</button>

//       {
//         this.state.show ?
//         <Picture />
//         :null
//       }
//     </div>;
//   }
// }

export default App;