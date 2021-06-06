import { digitCount, mostDigits, getPopulation, getText, minMaxPopulationIndex } from '../utils/utils';
import populationData from '../../../data/population.json';

test('digitCount', () => {
    expect(digitCount(123)).toBe(3);
});

test('mostDigits', () => {
    expect(mostDigits([12, 4444, 100, 48888])).toBe(5);
});

test('getPopulation', () => {
    expect(getPopulation(populationData.data)).toEqual([327167439, 325719178, 323127515, 321418821, 318857056, 316128839]);
});

test('getText', () => {
    expect(getText(7, '1234567')).toBe('$1M');
    expect(getText(5, '12345')).toBe('$12k');
});

test('maxPopulationIndex', () => {
    expect(minMaxPopulationIndex([10, 33, 555, 23, 1])).toBe(2);
    expect(minMaxPopulationIndex([10, 33, 555, 23, 1], 'min')).toBe(4);
})
