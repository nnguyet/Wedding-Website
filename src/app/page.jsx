import { Wallpaper, Timeline, Photos, Timebar, Wishes, Announce } from './components'

export default function Homepage() {
    return (
        <main>
            <Wallpaper />
            <Announce />
            <Timeline />
            <Timebar />
            <Photos />
            <Wishes />
        </main>
    );
}