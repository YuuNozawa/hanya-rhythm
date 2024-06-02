class Audio {
    constructor(frequency = 440, duration = 0.1, volume = 0.2) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.frequency = frequency;
        this.duration = duration;
        this.volume = volume;
        document.addEventListener('rhythmTick', this.beep.bind(this));
    }

    beep() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.type = 'square'; // 矩形波でブザー音を生成
        oscillator.frequency.value = this.frequency;
        gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime); // ボリューム

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + this.duration); // ブザー音の長さ
    }
}