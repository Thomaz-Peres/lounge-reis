export type CardProps = {
    clientName: string,
    descrition: string,
    item: string,
    value: number
}

export function Card(cardProps: CardProps) {
    return (
        // <div className="block max-w-sm p-6 bg-black border border-gray-800 rounded-lg shadow hover:bg-black-900 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mb-5 max-w-xs p-6 bg-neutral-800 rounded-xl shadow-2xl">

            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">Nome: {cardProps.clientName}</h3>
            <h6 className="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">Pedido: 5</h6>
            <p className="font-normal text-white-700 dark:text-gray-400">R$ {cardProps.value}</p>
            <p className="font-normal text-white-700 dark:text-gray-400">{cardProps.item}</p>
        </div>
    );
}