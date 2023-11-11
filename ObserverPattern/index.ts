// simulation of an Online news letter 
interface NewsLetter {
    attachUser(subscriberPhone: SubscriberPhoneApp): void;
    detachUser(subscriberPhone: SubscriberPhoneApp): void;
    notifyAll(message: string): void;
}

//Simulation of newyork times!!
class NYTimes implements NewsLetter {
    private subscriberPhones: SubscriberPhoneApp[] = []
    attachUser(subscriberPhone: SubscriberPhoneApp): void {
        const isAlreadySubscribed = this.subscriberPhones.includes(subscriberPhone)
        if (isAlreadySubscribed) {
            return console.log('User Allready Subscribed')
        }
        this.subscriberPhones.push(subscriberPhone)
    }
    detachUser(subscriberPhone: SubscriberPhoneApp): void {
        const index = this.subscriberPhones.indexOf(subscriberPhone)
        if (index === -1) {
            return console.log("this is not a subscriber")
        }
        this.subscriberPhones.splice(index, 1)
    }

    notifyAll(news: string): void {
        this.subscriberPhones.forEach(subscriber => { subscriber.displayNotification(news) })
    }
}



//imagine a smartphone that has multiple apps can push notifications!
interface SubscriberPhoneApp {
    displayNotification(message: string): void;
}

class PWASubscriber implements SubscriberPhoneApp {
    displayNotification(message: string): void {
        console.log(`On the screen: ${message}`)
    }
}

class SMSSubscriber implements SubscriberPhoneApp {
    displayNotification(message: string): void {
        console.log(`On the Messages: ${message}`)
    }
}



//test our code
const pwaSubscriber: PWASubscriber = new PWASubscriber();
const smsSubscriber: SMSSubscriber = new SMSSubscriber();

const actualNewYorkTimes: NYTimes = new NYTimes();
actualNewYorkTimes.attachUser(pwaSubscriber);
actualNewYorkTimes.attachUser(pwaSubscriber); // should return already subscribed
actualNewYorkTimes.detachUser(smsSubscriber); //should return non subscriber
actualNewYorkTimes.attachUser(smsSubscriber);
actualNewYorkTimes.notifyAll('Messi and Argentina Won Worlcup 2022!')
actualNewYorkTimes.detachUser(smsSubscriber);
actualNewYorkTimes.notifyAll('Ronaldo contracted to Al-Hilal to become most expensive player in the world!'); // only PWA subscriber should recieve