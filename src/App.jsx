import Nav from './nav.jsx';
import Conteaner from './container.jsx';
import './global.css';

export default function App() {
  return (
    <div className="relative w-[100%] h-[100vh] bg-[black] flex flex-col overflow-scroll ">
      < Nav />
      <Conteaner>
        <p className='text-[#3b0e87] text-[3rem] font-bold'> Hello, I am</p>
        <p className="text-outline text-white text-[3rem] font-bold"> Ahmed Goounami an</p>
        <p className="text-white text-[2rem] font-bold"> Aspiring Web Developer.</p>
      </Conteaner>
      <Conteaner>
        <h1 className="text-[black]">Hello World!</h1>
      </Conteaner>
    </div>
  );
}