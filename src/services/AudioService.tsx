import { Howl } from "howler";

interface IAudioChannel {
  inUse: boolean;
  sound: Howl;
}

const audioChannels: IAudioChannel[] = [];

function initAudioChannels(
  audioChannelsCount: number,
  audioSamplePath: string
) {
  if (audioChannels.length == 0) {
    for (let index = 0; index < audioChannelsCount; index++) {
      var audioChannelsItem = {
        inUse: false,
        sound: new Howl({ src: [audioSamplePath] }),
      };
      audioChannels.push(audioChannelsItem);
    }
  }
}

function getAudioChannel(channel: number) {
  if (audioChannels.length == 0) {
    throw `[AudioService] Audio channels were not initialized. You need to invoke AudioService.initAudioChannels(audioChannelsCount) before use play/stop`;
  }

  if (channel < 0 || channel >= audioChannels.length) {
    throw `[AudioService] Invalid channel index: ${channel}. Channels count: ${audioChannels.length}`;
  }

  return audioChannels[channel];
}

function playSoundNote(ratio: number, channel: number) {
  const audioChannel = getAudioChannel(channel);
  audioChannel.sound.volume(1);
  audioChannel.sound.rate(ratio);
  audioChannel.sound.play();
}

function stopSoundNote(channel: number) {
  const audioChannel = getAudioChannel(channel);
  audioChannel.sound.fade(1, 0, 500);
}

export default {
  initAudioChannels,
  playSoundNote,
  stopSoundNote,
};
