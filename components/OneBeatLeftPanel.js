class OneBeatLeftPanel extends Panel {
    update(e) {
        if(this.state.leftHandRhythm.beat === 1 && e.detail.rhythm.beat === 1){
            this.element.style.backgroundColor = 'green';
            setTimeout(() => {
                this.element.style.backgroundColor = 'white';
            }, this.state.routineMs - 10); // stateの更新時に白に戻す

            this.element.classList.add('neon');
            setTimeout(() => {
                this.element.classList.remove('neon');
            }, 230); // 0.23秒後に振動を停止
        }
    }
}