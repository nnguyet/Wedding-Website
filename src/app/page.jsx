import { Header, Wallpaper, Timeline, Photos, Timebar, Wishes } from './components'

export default function Homepage() {
    return (
        <main>
            <Header />
            <Wallpaper />
            <Timeline />
            <Timebar />
            <Photos />
            <Wishes />
        </main>
    );
}