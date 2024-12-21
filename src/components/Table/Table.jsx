import { NotePencil, Trash } from "phosphor-react";

export default function Table() {
    return (
        <table className="w-full text-center">
            <thead className="bg-[#F7FBFD] text-gray-400 border-b">
                <tr>
                    <th className="font-norma py-2">ID</th>
                    <th className="font-normal py-2">Nome</th>
                    <th className="font-normal py-2">Preço</th>
                    <th className="font-normal py-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b hover:bg-gray-100 transition-all duration-300">
                    <td className="py-2">Id</td>
                    <td className="py-2">Mouse</td>
                    <td className="py-2">R$ 10000,00</td>
                    <td>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="bg-[#118dc0] rounded p-2 text-white 
                            cursor-pointer hover:bg-[#426b7b] transition-all
                            duration-300">
                                <NotePencil size={24} />
                            </div>
                            <div className="bg-red-600 rounded p-2 text-white 
                            cursor-pointer hover:bg-[#e43f3fab] transition-all
                            duration-300">
                                <Trash size={24} />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}