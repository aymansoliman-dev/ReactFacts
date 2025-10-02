import reactIcon from '../assets/react.svg'

export default function Navbar() {
    return (
        <header className="p-8">
            <nav className="flex align-center gap-4">
                <img src={reactIcon} alt="React Logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}