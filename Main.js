const BPM = 60;
const state = new State(BPM);

const audio = new Audio();

const oneBeatLeft = new OneBeatLeftPanel( state, document.querySelector('.one-beat.left') );
const oneBeatRight = new OneBeatRightPanel( state, document.querySelector('.one-beat.right') );
const twoBeatsLeft = new TwoBeatsLeftPanel( state, document.querySelector('.two-beats.left') );
const twoBeatsRight = new TwoBeatsRightPanel( state, document.querySelector('.two-beats.right') );
const threeBeatsLeft = new ThreeBeatsLeftPanel( state, document.querySelector('.three-beats.left') );
const threeBeatsRight = new ThreeBeatsRightPanel( state, document.querySelector('.three-beats.right') );
const fourBeatsLeft = new FourBeatsLeftPanel( state, document.querySelector('.four-beats.left') );
const fourBeatsRight = new FourBeatsRightPanel( state, document.querySelector('.four-beats.right') );