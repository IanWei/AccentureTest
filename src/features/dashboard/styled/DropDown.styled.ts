import styled from 'styled-components';
import { Primary, TertiaryOption } from '../../../common/styled/typography';
import { color } from '../../../common/styled/palette';
import { device } from '../../../globalStyles';

export const StyledDropDownWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`

export const StyledDropDown = styled(Primary)`
    position: relative;
    display: flex;
    color: ${color.violet};
    padding-right: 50px;
    height: 30px;
    z-index: 0;
    cursor: pointer;
    user-select: none;
`

export const StyledChevronWrapper = styled.div<{open: boolean}>`
    display: flex;
    position: absolute;
    right: 10px;
    top: 50%;
    transition: all .2s ease;
    transform-origin: center;
    transform: ${p => p.open ? 'translateY(-50%) rotate(-90deg)' : 'translateY(-50%) rotate(90deg)'};
    
    svg {
        path {
            stroke: ${color.violet};        
        }
    }
`

export const StyledOptions = styled.ul<{open: boolean}>`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 10px;
    z-index: 1;
    width: 120%;
    cursor: pointer;
    background-color: ${color.backgroundLight};
    top: 30px;
    list-style: none;
    max-height: ${p => p.open ? '140px' : '0px'};   
    overflow-y: scroll;
    transition: max-height .2s ease;
    
    @media only screen and ${device.tablet} {
        top: 40px;
    }
    
    @media only screen and ${device.desktop} {
        top: 50px;
    }
`

export const StyledOption = styled(TertiaryOption)`
    display: flex;
    align-items: center;
    color: ${color.rollingStone};
    &:hover {
        color: ${color.mineShaft};
        background-color: ${color.background}
    }
`
