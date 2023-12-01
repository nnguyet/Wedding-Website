import { Header, Timeline, Photos, Timebar, Wishes } from './components'

export default function Homepage() {
    return (
        <main>
            <Header />
            <Timeline />
            <Timebar />
            <Photos />
            <Wishes />
        </main>
    );
}