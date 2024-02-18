import { useState } from 'react';
import styles from './styles.module.scss';

export default function Calculator() {
    const [prev, setPrev] = useState('');
    const [operator, setOperator] = useState('');
    const [current, setCurrent] = useState('');
    const [erase, setErase] = useState(false);

    function Display({ value }: { value: string }) {
        return <div className={styles.display}>{value}</div>;
    }

    function Keypad() {
        function input(n: string) {
            erase ? setCurrent(n) : setCurrent(current + n);
            setErase(false);
        }

        function clearAll() {
            setPrev('');
            setCurrent('');
        }

        function operation(operator: string) {
            if (prev === '' && current === '') {
                return;
            } else if (prev === '') {
                setPrev(current);
            } else {
                calculate(false);
            }
            setOperator(operator);
            setErase(true);
        }

        function calculate(end: boolean) {
            let result;

            switch (operator) {
                case '+':
                    result = parseFloat(prev) + parseFloat(current);
                    break;
                case '-':
                    result = parseFloat(prev) - parseFloat(current);
                    break;
                case '*':
                    result = parseFloat(prev) * parseFloat(current);
                    break;
                case '/':
                    result = parseFloat(prev) / parseFloat(current);
                    break;
            }

            result = result?.toLocaleString() as string;

            if (end) {
                setCurrent(result);
                setPrev('');
            } else setPrev(result);
        }

        const keyList = [
            { key: 'AC', area: 'ac', function: () => clearAll() },
            {
                key: '÷',
                area: 'd',
                function: () => operation('/'),
                orange: true,
            },
            {
                key: 'x',
                area: 'm',
                function: () => operation('*'),
                orange: true,
            },
            {
                key: '-',
                area: 's',
                function: () => operation('-'),
                orange: true,
            },
            {
                key: '+',
                area: 'a',
                function: () => operation('+'),
                orange: true,
            },
            {
                key: '=',
                area: 'e',
                function: () => calculate(true),
                orange: true,
            },
            { key: '.', area: 'p', function: () => input('.') },
            { key: '0', area: 'z', function: () => input('0') },
            { key: '1', area: 'one', function: () => input('1') },
            { key: '2', area: 'two', function: () => input('2') },
            { key: '3', area: 'three', function: () => input('3') },
            { key: '4', area: 'four', function: () => input('4') },
            { key: '5', area: 'five', function: () => input('5') },
            { key: '6', area: 'six', function: () => input('6') },
            { key: '7', area: 'seven', function: () => input('7') },
            { key: '8', area: 'eight', function: () => input('8') },
            { key: '9', area: 'nine', function: () => input('9') },
        ];

        return (
            <div className={styles.keypad}>
                {keyList.map((e) => (
                    <button
                        className={
                            e.orange
                                ? `${styles.keypad__key} ${styles.keypad__key__orange}`
                                : styles.keypad__key
                        }
                        style={{ gridArea: e.area }}
                        key={e.area}
                        onClick={() => e.function()}
                    >
                        {e.key}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className={styles.calculator}>
            <Display value={current} />
            <Keypad />
        </div>
    );
}
