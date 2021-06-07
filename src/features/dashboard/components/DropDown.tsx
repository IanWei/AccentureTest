import React, { FC, useState } from 'react';
import { DropDownTypes } from '../types/DropDown.types';
import {
    StyledChevronWrapper,
    StyledDropDown,
    StyledDropDownWrapper,
    StyledOption,
    StyledOptions
} from '../styled/DropDown.styled';
import { ChevronRightIcon } from '../../../common/assets/ChevronRightIcon';

export const DropDown: FC<DropDownTypes> = ({ selectedOption, options, selectOption}) => {
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState(selectedOption);
    const handleOnClick = () => {
        setOpen(!open);
    }
    const handleSelect = (value: string) => {
        setOption(value);
        setOpen(false);
        selectOption(value);
    }
    return (
        <StyledDropDownWrapper>
            <StyledDropDown onClick={handleOnClick}>
                {option}
                <StyledChevronWrapper open={open}>
                    <ChevronRightIcon />
                </StyledChevronWrapper>
            </StyledDropDown>
            <StyledOptions open={open}>
                {options.map((option, index) => <StyledOption key={index} onClick={() => handleSelect(option)}>{option}</StyledOption>)}
            </StyledOptions>
        </StyledDropDownWrapper>
    )
}
