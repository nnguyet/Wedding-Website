import { Wallpaper, Timeline, Photos, Timebar, Wishes, Announce, Gallery, Introduction } from './components'

export default function Homepage() {
    return (
        <main>
            <Wallpaper />
            <Announce />
            <Gallery />
            <Introduction />
            <Timeline />
            <Timebar />
            <Photos />
            <Wishes />
        </main>
    );
}