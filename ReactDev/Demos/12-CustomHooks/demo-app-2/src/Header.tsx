import useWindowSize from "./CustomHooks";

export default function Header() {

    const windowSize = useWindowSize();

    return (
        <>
            <div>Window width {windowSize.currentWidth}, height {windowSize.currentHeight} [pixels]</div>
            <hr />
        </>
    )
}