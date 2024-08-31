import { Subscriber } from "./interfaces/Subscriber";

export class Member implements Subscriber {
  update(message: string): void {
    console.log(message);
  }
}
