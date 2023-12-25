import { Fragment } from "react"

export default function WishesLayout({ children }) {
    return (
        <Fragment>
            <section>
                {children}
            </section>
        </Fragment>
    )
}