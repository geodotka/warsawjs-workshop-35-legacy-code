const Timer = require('../../src/pomodoro/timer');

describe('Timer', () => {
    let $item = null;
    beforeEach(() => {
        $item = document.createElement('warsawjs-minus');
    });
    describe('decreaseElementNumber', () => {
        it('should reduce value', () => {
            // Arrange
            $item.textContent = '14';
            // Act
            Timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('13');
            // Teardown
            // ...
        });
        it('should return MINIMUM_CLOCK_VALUE if put 0', () => {
            // Arrange
            $item.textContent = '0';
            // Act
            Timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('0');
            // Teardown
        });
        it('should return MINIMUM_CLOCK_VALUE if put -1', () => {
            // Arrange
            $item.textContent = '-1';
            // Act
            Timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('0');
            // Teardown
        });
    });
    describe('increaseElementNumber', () => {
        it('should increase value', () => {
            // Arrange
            $item.textContent = '14';
            // Act
            Timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('15');
            // Teardown
        });
        it('should return MAXIMUM_CLOCK_VALUE if put number too big', () => {
            // Arrange
            $item.textContent = '100';
            // Act
            Timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('60');
            // Teardown
        });
    });
});
