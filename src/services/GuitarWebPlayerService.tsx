import Config from "../Config";
import AudioService from "./AudioService";
import TouchService, { TouchedNote, TouchServiceEvent } from "./TouchService";
import TuningService from "./TuningService";

function onTouchNoteStart(note: TouchedNote) {
  //console.log(`Str: ${guitarStringIndex} Frt: ${fretIndex}`);
  //setDebugText(`Str: ${guitarStringIndex} Frt: ${fretIndex}`);

  const ratio = TuningService.getRatioFromMainFrequency(
    note.guitarStringIndex,
    note.fretIndex,
    Config.audioSampleMainFrequency
  );

  AudioService.initAudioChannels(
    Config.guitarStringsCount,
    Config.audioSamplePath
  );
  AudioService.playSoundNote(ratio, note.guitarStringIndex);
}

function onTouchNoteEnd(note: TouchedNote) {
  //console.log("touchEnd", note.guitarStringIndex);
  AudioService.stopSoundNote(note.guitarStringIndex);
}

function init() {
  TouchService.addEventListener(
    TouchServiceEvent.OnTouchNoteStart,
    onTouchNoteStart
  );

  TouchService.addEventListener(
    TouchServiceEvent.OnTouchNoteEnd,
    onTouchNoteEnd
  );
}

export default {
  init,
};
