import logo from './logo.svg';
import SearchBoxForm from './components/searchboxform';
import Header from './components/header';
import ListResult from './components/listresult';
import './App.css';

function App() {
  document.body.classList.add('p-0')
  document.body.classList.add('bg-white')
  return (
    <div className='p-4 bg-light'>
      <Header></Header>
      <SearchBoxForm></SearchBoxForm>
      <ListResult></ListResult>
    </div>
  );
}

export default App;
