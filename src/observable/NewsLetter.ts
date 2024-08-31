import { Publisher } from "./interfaces/Publisher";
import { Subscriber } from "./interfaces/Subscriber";

type NewsTypes = "politics" | "sports";

export class NewsLetter implements Publisher<NewsTypes> {
  private members = new Map<NewsTypes, Subscriber[]>();

  attach(member: Subscriber, type: NewsTypes) {
    if (this.members.has(type)) {
      if (this.members.get(type)!.includes(member)) {
        return console.log("Warning: member already on the newsletter");
      }
      this.members.get(type)?.push(member);
    } else {
      this.members.set(type, [member]);
    }
  }
  detach(member: Subscriber, type: NewsTypes) {
    if (this.members.has(type)) {
      let index = this.members.get(type)!.indexOf(member);
      if (index > -1) {
        this.members.get(type)!.splice(index, 1);
      }
    }
  }
  notify(type: NewsTypes) {
    if (this.members.has(type)) {
      this.members.get(type)!.forEach((value) => {
        value.update(`Message type ${type}`);
      });
    }
  }
}
