window.addEventListener("load", ()=> {
    document.getElementById("play_button").addEventListener("click", ()=> {
        state.start();
    });
    document.getElementById("pause_button").addEventListener("click", () => {
        state.stop();
    });
});