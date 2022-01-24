import Config from "../Config";
import AudioService from "./AudioService";
import TouchService, { TouchedNote, TouchServiceEvent } from "./TouchService";
import TuningService from "./TuningService";

function onTouchNoteStart(note: TouchedNote) {
  const ratio = TuningService.getRatioFromFret(
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
