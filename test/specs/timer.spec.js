const Timer = require('../../src/pomodoro/timer');

describe('Timer', () => {
    let $item = null;
    let timer = null;

    beforeEach(() => {
        $item = document.createElement('warsawjs-minus');
        timer = new Timer();
    });
    describe('decreaseElementNumber', () => {
        it('should reduce value', () => {
            // Arrange
            $item.textContent = '14';
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('13');
            // Teardown
            // ...
        });
        it('should return MINIMUM_CLOCK_VALUE if put 0', () => {
            // Arrange
            $item.textContent = '0';
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('0');
            // Teardown
        });
        it('should return MINIMUM_CLOCK_VALUE if put -1', () => {
            // Arrange
            $item.textContent = '-1';
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('0');
            // Teardown
        });
        it('should raise exception if HTMLElement does not have number as value', () => {
            $item.textContent = 'warsawjs';
            expect(() => {
                timer.decreaseElementNumber($item);
            }).toThrow();
        });
    });
    describe('increaseElementNumber', () => {
        it('should increase value', () => {
            // Arrange
            $item.textContent = '14';
            // Act
            timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('15');
            // Teardown
        });
        it('should return MAXIMUM_CLOCK_VALUE if put number too big', () => {
            // Arrange
            $item.textContent = '100';
            // Act
            timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('60');
            // Teardown
        });
        it('should raise exception if HTMLElement does not have number as value', () => {
            $item.textContent = 'warsawjs';
            expect(() => {
                timer.increaseElementNumber($item);
            }).toThrow();
        });
    });
    describe('startTimer', () => {
        it('should call timer counter', () => {
            // Arrange
            const $break = document.createElement('breakTime');
            $break.textContent = '1';
            const $session = document.createElement('sessionTime');
            $session.textContent = '1';

            // mock timeCounter
            timer.timeCounter = jest.fn();
            jest.spyOn(timer, 'timeCounter');

            // Act
            timer.startTimer($break, $session);

            // Assert
            expect(timer.timeCounter).toHaveBeenCalled();
            expect(timer.timeCounter).toHaveBeenCalledTimes(1);
            expect(timer.timeCounter).toHaveBeenCalledWith(
                Timer.ONE_MINUTE_IN_MILLISECONDS,
                Timer.ONE_MINUTE_IN_MILLISECONDS
            );
        });
    });
});
