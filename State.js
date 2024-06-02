class State {
    constructor(bpm) {
        this.bpm = bpm;
        this.routineMs = ((60 / this.bpm) / 1) * 1000 * 4;
        this.intervalId = null;
        this.currentIndex = 0;
        this.leftHandRhythm = null;
        this.rightHandRhythm = null;
        this.leftHandPatterns = [
             Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createOneBeatRhythm      // 1
        ];

        this.rightHandPatterns = [
             Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createOneBeatRhythm      // 1
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createFourBeatsRhythm    // 4
            ,Rhythm.createThreeBeatsRhythm   // 3
            ,Rhythm.createTwoBeatsRhythm     // 2
            ,Rhythm.createOneBeatRhythm      // 1
       ];

    }
    changeState() {
        this.currentIndex = (this.currentIndex + 1 < this.leftHandPatterns.length) ? this.currentIndex + 1 : 0;
    }
    start() {
        if(!this.intervalId) {
            this.intervalId = setInterval(() => {
                if(this.leftHandRhythm && this.rightHandRhythm) {
                    this.leftHandRhythm.stop();
                    this.rightHandRhythm.stop();
                }
                this.leftHandRhythm = this.leftHandPatterns[this.currentIndex](this.bpm);
                this.rightHandRhythm = this.rightHandPatterns[this.currentIndex](this.bpm);
                Rhythm.syncStart([this.leftHandRhythm, this.rightHandRhythm]);
                this.changeState();
            }, this.routineMs);

            // 初回実行
            this.leftHandRhythm = this.leftHandPatterns[this.currentIndex](this.bpm);
            this.rightHandRhythm = this.rightHandPatterns[this.currentIndex](this.bpm);
            Rhythm.syncStart([this.leftHandRhythm, this.rightHandRhythm]);
            this.changeState();
        }
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.currentIndex = 0;
        this.leftHandRhythm.stop();
        this.rightHandRhythm.stop();
        this.leftHandRhythm = null;
        this.rightHandRhythm = null;
    }
}