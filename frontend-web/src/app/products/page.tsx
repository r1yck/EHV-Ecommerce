import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Products() { 
  return (
    
    <div className="flex flex-col min-h-screen bg-green-300 ">
      {/* Navbar */}
        <div className="flex flex-col justify-center items-center p-2"> {/* Usei essa Div para centralizar a navbar */}
            <nav className="flex w-3/4 justify-center gap-x-11 py-3 border-4 border-green-700 bg-green-400 rounded-full shadow-lg">
                <a href={"/"} className="text-lg font-medium text-black hover:text-emerald-700 ">
                    Clientes
                </a>
                <a href="/shopping" className="text-lg font-medium text-black hover:text-emerald-700">
                    Compras
                </a>
                <a href="#" className="text-lg font-medium text-black hover:text-emerald-700">
                    Produtos
                </a>
            </nav>
        </div>
      {/* Navbar */}
      {/* Botão Novo Cliente */}
      <div className="flex justify-end p-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-blue-300 ">
          Novo Cliente
        </button>
      </div>

      {/* Lista de Produtos */}
      <div className="container m-auto grid grid-cols-3 gap-2 px-4">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Batata</h2>
                <p className="text-sm text-gray-600">Quantidade:</p>
                <p className="text-sm text-gray-500">Valor</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 py-1 text-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                  Colocar no carrinho
                </button>
              </div>
            </div>
          ))}
      </div>

      <footer className="py-4 text-center bg-gray-500">
        <p className="text-sm text-black">
          Feito com ❤️ em Itapetinga
        </p>
      </footer>
    </div> 
  );
}
