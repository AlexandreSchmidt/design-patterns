import { Subscriber } from "./Subscriber";

export interface Publisher<T> {
  attach(subscriber: Subscriber, type: T);
  detach(subscriber: Subscriber, type: T);
  notify(type: T);
}
