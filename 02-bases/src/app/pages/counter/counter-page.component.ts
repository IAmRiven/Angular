import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent{
    counter = 10;
    counterSignal = signal(10);
    
    // constructor(){
    //     setInterval(() => {
    //         // this.counter++;
    //         this.increaseByOne(1);
    //         console.log('Tick');
    //     }, 2000)
    // }

    increaseByOne(value: number) {
        this.counter += value;
        this.counterSignal.update( (actual) => actual + value);
    } 

    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0);}
}