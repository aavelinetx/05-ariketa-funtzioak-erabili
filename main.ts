function gidatu_ezkerrera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
function gidatu_eskuinera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        gidatu_eskuinera()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        gidatu_ezkerrera()
    }
})
