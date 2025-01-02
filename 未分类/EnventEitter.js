class EnventEitter {
  constructor() {
    this.list = {};
  }

  $on(name) {
    let task = this.list[name];
    if (!task) this.list[name] = [];
    this.list[name].push(fn);
  }

  $emit(name, ...args) {
    let tasks = this.list[name];
    if (tasks) {
      for (const task of tasks) {
        task(...args);
      }
    }
  }
}

class EventEitter {
  constructor() {
    this.list = {};
  }

  $on(name, fn) {
    let task = this.list[name];
    if (!task) this.list[name] = [];
    this.list[name].push(task);
  }

  $emit(name, ...args) {
    let tasks = this.list[name];
    if (tasks) {
      for (const task of tasks) {
        task(...args);
      }
    }
  }
}

let eventBus = new EventEitter();
eventBus.$on("getData", (val) => {
  console.log(val);
});

eventBus.$emit("getData", "1111");
