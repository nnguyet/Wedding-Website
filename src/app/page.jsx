import { Wallpaper,
        Timeline,
        Photos,
        Timebar,
        Wishes,
        Announce,
        Gallery,
        Introduction,
        Dresscode,
        Qrcode } from './components'

export default function Homepage() {
    return (
        <main>
            <Wallpaper />
            <Announce />
            <Gallery />
            <Introduction />
            <Timeline />
            <Timebar />
            <Dresscode />
            <Photos />
            <Wishes />
            <Qrcode />
        </main>
    );
}