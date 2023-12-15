
import { useState, useEffect } from 'react'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 }) // <-- don't invoke here

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        handleResize() // <-- invoke this on component mount
        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return windowDimensions
}



export function isMobile(): boolean {
    const mobileSize = 640
    return getWindowDimensions().width < mobileSize
}
export function isTablet() {
    const tabletSize = 768
    return getWindowDimensions().width < tabletSize
}
export function isDesktop() {
    const desktopSize = 1024
    return getWindowDimensions().width < desktopSize
}