console.log('connected-again');


class TypeWriter {
  constructor(textArea) {
    this.beats = [
      'a web developer',
      'a digital enthusiast',
      'a passionate learner'];

    this.currentText = textArea;
    this.isDeleting = false;
    this.wordIndex = 0;
    this.speed = 300;
    this.type();
  }

  type() {

    const currentIndex = this.wordIndex % this.beats.length;
    console.log(currentIndex);
    const fullText = this.beats[currentIndex];

    if (!this.isDeleting) {
      this.currentText.textContent = fullText.substring(0, this.currentText.textContent.length + 1);
    } else {
      this.currentText.textContent = fullText.substring(0, this.currentText.textContent.length - 1);
    }

    if (this.isDeleting) {
      this.speed = 100;
    } else {
      this.speed = 300;
    }

    if (fullText === this.currentText.textContent) {
      this.isDeleting = true;
      this.speed = 1000;
    }

    if (this.currentText.textContent === '') {
      this.wordIndex += 1;
      this.isDeleting = false;
      this.speed = 1000;
    }

    /* waits one second and calls itself and run from the begining */
    setTimeout(() => this.type(), this.speed);
  }
}

// Wait for the DOM Load
document.addEventListener('DOMContentLoaded', () => {

  // get text area from page
  let currentText = document.querySelector('#beat');

  // Init TypeWriter with text area
  new TypeWriter(currentText);
});

