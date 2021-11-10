import { Injectable } from "@nestjs/common";
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PubsubService {
  private readonly pubsub = new PubSub();
  
  subscribe(evtName: string) {
    return this.pubsub.asyncIterator(evtName)
  }

  notify(evtName: string, payload: any) {
    this.pubsub.publish(evtName, payload);
  }
}