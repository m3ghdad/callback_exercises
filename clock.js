class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // time = `${hours}::${minutes}::${seconds}`
    const time = [this.hours, this.minutes, this.seconds].join(":");
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.incrementSeconds();
    this.printTime();
  }

  incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.incrementMinutes();
    }
  }

  incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0
      this.incrementHours();
    }
  }

  incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}



const clock = new Clock();
