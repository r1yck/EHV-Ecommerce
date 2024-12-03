import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Shopping() {
    return (
    
        <div className="flex flex-col min-h-screen bg-green-300 ">
          {/* Navbar */}
            <div className="flex flex-col justify-center items-center p-2"> {/* Usei essa Div para centralizar a navbar */}
                <nav className="flex w-3/4 justify-center gap-x-11 py-3 border-4 border-green-700 bg-green-400 rounded-full shadow-lg">
                    <a href={"/"} className="text-lg font-medium text-black hover:text-emerald-700 ">
                        Clientes
                    </a>
                    <a href="#" className="text-lg font-medium text-black hover:text-emerald-700">
                        Compras
                    </a>
                    <a href="/products" className="text-lg font-medium text-black hover:text-emerald-700">
                        Produtos
                    </a>
                </nav>
            </div>
            {/* Navbar */}

            {/* Lista de Compras */}
            <div className="m-6 p-6 border border-gray-300 rounded-lg bg-white shadow-lg max-w-sm mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Carrinho</h1>

                {/* Lista de Itens no Carrinho */}
                <div className="flex flex-col gap-4 mb-6">
                    {[
                    { id: 1, name: "Produto A", price: "R$ " },
                    { id: 2, name: "Produto B", price: "R$ " },
                    ].map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-b pb-2 border-gray-300"
                    >
                        <div>
                          <p className="text-lg font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.price}</p>
                        </div>
                        <button className="text-red-500 font-bold hover:text-red-700 transition">
                          Remover
                        </button>
                     </div>
                 ))}
                </div>

                {/* Total de Itens e Valor */}
                <div className="flex justify-between items-center text-gray-700 mb-4">
                  <span className="text-lg font-medium">Total de Itens:</span>
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="flex justify-between items-center text-gray-700 mb-6">
                  <span className="text-lg font-medium">Valor Total:</span>
                  <span className="text-lg font-bold">R$</span>
                 </div>

                 {/* Botão Finalizar Compra */}
                 <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300">
                   Finalizar Compra
                 </button>
                </div>

              {/* Final Lista de Compras */}

        </div>
    );
}