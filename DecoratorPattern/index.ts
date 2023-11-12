interface Notifier {
    sendNotification(): string;
}

class Notif implements Notifier {
    constructor(private message: string) { }
    sendNotification(): string {
        return this.message
    }
}

class NotifierDecorator implements Notifier {
    constructor(protected notif: Notifier) { }
    sendNotification(): string {
        return this.sendNotification()
    }
}

class EmailNotifierDecorator extends NotifierDecorator {
    sendNotification(): string {

        return (`${this.notif.sendNotification()} => sent by Email`)
    }
}

class PushNotificationDecorator extends NotifierDecorator {
    sendNotification(): string {
        return (`${this.notif.sendNotification()} => sent by Notifications`)
    }
}


//test our code
let myNotification: Notifier = new Notif("Messi and Argentina Won Worldcup 2022!")
myNotification = new EmailNotifierDecorator(myNotification);
myNotification = new PushNotificationDecorator(myNotification);
console.log(myNotification.sendNotification())