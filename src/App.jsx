import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App () {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Productos'}/>
      <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log('Se agrego: ',quantity)}/>
    </div>
  );
};

export default App;
