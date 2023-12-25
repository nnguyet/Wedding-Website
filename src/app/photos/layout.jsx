import { Fragment } from "react"

export default function PhotosLayout({ children }) {
    return (
        <Fragment>
            <section>
                {children}
            </section>
        </Fragment>
    )
}