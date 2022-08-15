import { FaBeer } from 'react-icons/fa';
import './Task.css';

export function TaskCard({ ready }) {
  return (
    <div className='card'>
      <h1 className='title'>Mi primer tarea <FaBeer/></h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? 'Tarea realizada' : 'Tarea pendiente'}
      </span>
    </div>
  );
}