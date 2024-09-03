import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
	subscriber.next(1);
	subscriber.next(2);
	subscriber.next(3);
	setTimeout(() => {
		subscriber.next(4);
		subscriber.complete();
	}, 1000);
});

console.log("just before subscribe");
observable.subscribe({
	next(x) {
		console.log("got value" + x);
	},
	error(err) {
		console.error("Something wrong occured: " + err);
	},
	complete() {
		console.log("done");
	},
});
console.log("just after subscribe");

// Disposing observable
import { from } from "rxjs";

const observable$ = from([10, 20, 30]);
const subscription = observable$.subscribe((x) => console.log(x));
subscription.unsubscribe();
