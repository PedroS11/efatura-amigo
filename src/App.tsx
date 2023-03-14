import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <div className="flex flex-col">
                <div className=" sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Empresa</th>
                                    <th scope="col" className="px-6 py-4">Categoria</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                    className="border-b transition duration-300 ease-in-out dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">MarkMarkMarkMarkMarkMarkMarkMarkMarkMarkMarkMarkMarkMarkMarkMark</td>
                                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                </tr>
                                <tr
                                    className="border-b transition duration-300 ease-in-out dark:border-neutral-500">
                                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
