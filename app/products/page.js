import Link from "next/link";
import "./style.scss";

export default async function Client() {
    const res = await fetch('http://localhost:3001/SOM');

    if (!res.ok) {
        console.error('Ошибка при получении данных:', res.status);
        return <h1>Error fetching data</h1>;
    }

    let data;
    try {
        data = await res.json();
    } catch (error) {
        console.error('Ошибка при разборе JSON:', error);
        return <h1>Invalid JSON format</h1>;
    }

    return (
        <>
            <h1>Hello client</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Views: {item.views}</p>
                </div>
            ))}
            <Link href="/">Home</Link>
        </>
    );
}
