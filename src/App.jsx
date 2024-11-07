
import Nav from './nav.jsx';
import Conteaner from './container.jsx';

export default function App() {
  return (
    <div className="relative w-[100%] h-[100vh] bg-[black] overflow-scroll">
      < Nav />
      <Conteaner>
        <h1 className="text-[white]">Hello World!</h1>
      </Conteaner>
    </div>
  );
}