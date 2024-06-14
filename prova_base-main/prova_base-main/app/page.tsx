import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import '../global.css';


const Home = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo ao Meu Site de Receitas!</h1>
      {user && (
        <Link href="/recipes">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Receitas
          </a>
        </Link>
      )}
    </div>
  );
};

export default Home;
