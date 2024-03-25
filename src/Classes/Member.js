export class Member {
  constructor(data) {
    this.name = data.name || "Unknown";
    this.income = data.income || 0;
  }
}