class Rhythm {
    constructor(bpm, beat) {
        this.bpm = bpm;
        this.beat = beat;
        this.intervalMs = ((60 / this.bpm) / this.beat) * 1000;
    }
    static createOneBeatRhythm(bpm) {
        return new Rhythm(bpm, 1);
    }
    static createTwoBeatsRhythm(bpm) {
        return new Rhythm(bpm, 2);
    }
    static createThreeBeatsRhythm(bpm) {
        return new Rhythm(bpm, 3);
    }
    static createFourBeatsRhythm(bpm) {
        return new Rhythm(bpm, 4);
    }
    static async syncStart(rhythms) {
        // 非同期処理を使って同期させる(矛盾はない)
        // 全てのRhythmインスタンスのstartメソッドを呼ぶ前に待機する
        // イベントループを使って次のサイクルに処理を移すことで、非常に短い時間差で複数の処理を開始することができる
        await new Promise(resolve => setTimeout(resolve, 0));
        rhythms.forEach(rhythm => rhythm.start());
    }
    
    notify() {
        const event = new CustomEvent('rhythmTick', { detail: { rhythm: this } });
        document.dispatchEvent(event);
    }
    start() {
        if(!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.notify();
            }, this.intervalMs); // BPMからミリ秒に変換
            
            // 初回実行
            this.notify();
        }
    }
    stop() {
        clearInterval(this.intervalId);
    }
}