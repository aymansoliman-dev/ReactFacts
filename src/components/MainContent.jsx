export default function MainContent() {
    return (
        <main className="p-8">
            <h1>Fun facts about React</h1>
            <ReactFacts />
        </main>
    )
}

function ReactFacts() {
    return (
        <ul className="facts-list">
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    )
}