const data: Array<any> = [
    { a: "button", partida: "asdasd", orden: "sdaphf", motivo: "ahwewl", costo: 10000, fecha: new Date() },
    { a: "button", partida: "gynei", orden: "hnue", motivo: "anghow", costo: 8800, fecha: new Date() },
    { a: "button", partida: "spdngei", orden: "hhabeue", motivo: "owabgfw", costo: 873600, fecha: new Date() }
];

const displayInit = (data: any) =>
{
    const keys: Array<string> = Object.keys(data);
    const output: Map<string, boolean> = new Map();
    keys.forEach(e => {
        output.set(e, true);
    });
    return output;
}

const rowDisplayInit = (data: Array<any>) =>
{
    const output: Map<number, boolean> = new Map();
    for(let i = 0; i < data.length; i++)
    {
        output.set(i, true);
    }
    return output;
}

const display = displayInit(data[0]);
const displayRow = rowDisplayInit(data);

const rowFilter = ({ word, column, data }: { word: string, column: string, data: Array<any> }) =>
{
    const result: Array<any> = data.filter(e => e[column].includes(word));
    return result;
}

console.log(rowFilter({ word: "s", column: "partida", data: data}));