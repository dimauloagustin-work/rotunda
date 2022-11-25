interface Animal {
  speak(dialogue: string): void;
}

abstract class SimpleAnimal implements Animal {
  constructor(protected speakDialogue: string) {}

  speak(dialogue: string) {
    console.log(
      dialogue.replace(/[ ]/g, " " + this.speakDialogue + " ") +
        " " +
        this.speakDialogue
    );
  }
}

class Lion extends SimpleAnimal {
  constructor() {
    super("roar");
  }
}

class Tiger extends SimpleAnimal {
  constructor() {
    super("grrr");
  }
}

const lion: Animal = new Lion();
const tiger: Animal = new Tiger();

lion.speak("I'm a lion");
tiger.speak("Lions suck");
