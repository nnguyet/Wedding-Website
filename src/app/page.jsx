import { Wallpaper, Timeline, Photos, Timebar, Wishes } from './components'

export default function Homepage() {
    return (
        <main>
            <Wallpaper />
            <Timeline />
            <Timebar />
            <Photos />
            <Wishes />
        </main>
    );
}