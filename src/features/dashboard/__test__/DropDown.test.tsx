import { fireEvent, render } from '@testing-library/react';
import { DropDown } from '../components/DropDown';
import 'jest-styled-components';

describe('DropDown' , () => {
    let dropdown: HTMLDivElement
    let dropdownOption: HTMLUListElement
    beforeEach(() => {
        const { queryByTitle } = render(<DropDown options={[]} selectedOption='' selectOption={() => {}} />)
        dropdown = queryByTitle('dummyDropDown') as HTMLDivElement;
        dropdownOption = queryByTitle('dummyDropDownOption') as HTMLUListElement;
    });

    it('should render DropDown', () => {
        expect(dropdown).toBeTruthy();
    });

    it('should open dropdown menu', () => {
        fireEvent.click(dropdown);
        expect(dropdownOption).toHaveStyleRule('max-height', '140px');
    })

    it('should close dropdown menu', () => {
        fireEvent.click(dropdown);
        fireEvent.click(dropdown);
        expect(dropdownOption).toHaveStyleRule('max-height', '0px');
    })
})
