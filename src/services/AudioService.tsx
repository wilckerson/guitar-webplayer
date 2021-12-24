import { Howl } from "howler";
import audioSamplePath from "../assets/audio-samples/Alesis-Fusion-Clean-Guitar-C3.wav";

interface IAudioCacheItem {
  inUse: boolean;
  sound: Howl;
}

const audioCache: IAudioCacheItem[] = [];
const AUDIO_CACHE_SIZE = 1;

function initAudioCache() {
  if (audioCache.length == 0) {
    for (let index = 0; index < AUDIO_CACHE_SIZE; index++) {
      var audioCacheItem = {
        inUse: false,
        sound: new Howl({ src: [audioSamplePath] }),
      };
      audioCache.push(audioCacheItem);
    }
  }
}

function playSoundNote() {
  initAudioCache();

  //   const audioCacheIdx = audioCache.findIndex((i) => i.inUse == false);
  const audioCacheIdx = 0;
  //   if (audioCacheIdx != -1) {
  //     audioCache[audioCacheIdx].inUse = true;

  var sound = audioCache[audioCacheIdx].sound;

  sound.volume(1);
  //sound.rate(rate);
  sound.play();
  //}
}

export default {
  initAudioCache,
  playSoundNote,
};
