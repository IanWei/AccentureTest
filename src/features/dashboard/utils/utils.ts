import { PopulationDataType } from '../../../data/types';

export const digitCount = (num: number) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

export const mostDigits = (nums: number[]) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

export const getPopulation = (data: PopulationDataType) => data.map((datum) => datum.Population);

export const getText = (mostDigit: number, text?: string) => {
    if (!text || text === '0') return '$0';
    if (mostDigit > 6) return '$' + text.slice(0, -6) + 'M';
    if (mostDigit > 3) return '$' + text.slice(0, -3) + 'k';
    return '$' + text;
}

export const minMaxPopulationIndex = ( nums: number[], type: 'min' | 'max' = 'max') => {
    let minMaxNum = type === 'max' ? -Infinity : Infinity,
        index = type === 'max' ? -Infinity : Infinity,
        num;
    for (let i = 0; i < nums.length; i++) {
        num = nums[i];
        if (type === 'max' && num > minMaxNum) {
            minMaxNum = num;
            index = i;
        }
        if (type === 'min' && num < minMaxNum) {
            minMaxNum = num;
            index = i;
        }
    }
    return index;
}
