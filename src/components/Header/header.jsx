import { Plus } from "phosphor-react";

export default function Header() {
    return (
        <header className="bg-[#f1f1f1f1] flex justify-between items-center p-5">
            <div>
                <h1 className="font-semibold">Detalhes dos produtos</h1>
            </div>
            <div className="space-x-4 flex">
                <input type="text"
                    placeholder="Pesquisar"
                    className="border border-[#118dc0] px-6 py--1 rounded placeholder:text-[#118dc0]"
                />
                <button
                    className="bg-[#118dc0] text-white py-1 px-4 rounded gap-2 hover:bg-[#426b7b] transition-all duration-300 flex items-center"
                > <Plus size={16} />Novo Produto</button>
            </div>
        </header>
    )
}