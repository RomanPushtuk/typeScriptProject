class EventEmitter {
  events;

  constructor() {
    this.events = {};
  }

  on(type:string, listener:Function) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type:string, arg:any) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(arg));
    }
  }
}

export default EventEmitter;
