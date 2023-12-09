import { Wallpaper, Timeline, Photos, Timebar, Wishes, Announce, Gallery } from './components'

export default function Homepage() {
    return (
        <main>
            <Wallpaper />
            <Announce />
            <Gallery />
            <Timeline />
            <Timebar />
            <Photos />
            <Wishes />
        </main>
    );
}