import { Scene } from "phaser";

import PlayerPng from "../assets/sprites/player/player.png?url";
import PlayerJson from "../assets/sprites/player/player.json";
import HurtOgg from "../assets/sounds/hurt.ogg";
import GameMp3 from "../assets/sounds/game.mp3?url";

export class BootloaderScene extends Scene {
  constructor() {
    super("BootloaderScene");
  }

  public preload() {
    this.load.aseprite("player", PlayerPng, PlayerJson);
    this.load.audio("hurt", HurtOgg);
    this.load.audio("game", GameMp3);
    this.load.once("complete", () => {
      this.scene.start("StartScene");
    })
  }

}