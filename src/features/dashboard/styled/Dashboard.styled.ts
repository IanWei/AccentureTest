import styled from 'styled-components';
import { PrimaryCap } from '../../../common/styled/typography';
import { color } from '../../../common/styled/palette';

export const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    padding: 60px;
    margin: 0 auto;
`
export const StyledHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;    
    margin-bottom: 60px;
`

export const StyledLeft = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
`

export const StyledRight = styled.div`
    display: flex;
    align-items: center;    
`

export const StyledAppOption = styled(PrimaryCap)`
    display: flex;
    align-items: center;
    color: ${color.mineShaft};
`

export const StyledChevronWrapper = styled.div<{open: boolean}>`
    position: absolute;
    right: 10px;
    top: 50%;
    transition: all .2s ease;
    transform: ${p => p.open ? 'translateY(-50%) rotate(90deg)' : 'translateY(-50%) rotate(-90deg)'};
    
    svg {
        path {
            stroke: ${color.violet};        
        }
    }
`
