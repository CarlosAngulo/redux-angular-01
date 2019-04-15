import { Action } from '@ngrx/store';

export const DECREMENT: string = '[Counter] Decrement';
export const INCREMENT: string = '[Counter] Increment';
export const MULTIPLY: string = '[Counter] Multiply';
export const DIVIDE: string = '[Counter] Divide';
export const RESET: string = '[Counter] Reset';

export class CounterIncrement implements Action {
    readonly type = INCREMENT
}

export class CounterDecrement implements Action {
    readonly type = DECREMENT
}

export class CounterMultiply implements Action {
    readonly type = MULTIPLY;
    constructor( public payload: number ) {}
}

export class CounterDivide implements Action {
    readonly type = DIVIDE;
    constructor ( public payload: number) {}
}

export class CounterReset implements Action {
    readonly type = RESET;
}

export type actions = CounterMultiply | CounterDecrement | CounterIncrement | CounterDivide | CounterReset;