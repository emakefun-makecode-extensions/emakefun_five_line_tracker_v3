let five_line_tracker_v3 = emakefun.createFiveLineTrackerV3(80)

for (let index = 0; index <= 4; index++) {
    five_line_tracker_v3.setHighThreshold(index, 1000)
    five_line_tracker_v3.setLowThreshold(index, 200)
}

basic.forever(function () {
    basic.showString("" + (five_line_tracker_v3.getDeviceId()))
    basic.showString("" + (five_line_tracker_v3.getFirmwareVersion()))
    for (let index2 = 0; index2 <= 4; index2++) {
        basic.showString("" + (five_line_tracker_v3.analogValue(index2)))
    }
    for (let index3 = 0; index3 <= 4; index3++) {
        basic.showString("" + (five_line_tracker_v3.digitalValue(index3)))
    }
    basic.pause(200)
})
