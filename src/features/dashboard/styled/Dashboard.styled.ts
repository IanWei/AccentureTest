import styled from 'styled-components';
import { PrimaryCap } from '../../../common/styled/typography';
import { color } from '../../../common/styled/palette';
import { device } from '../../../globalStyles';

export const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    padding: 0;
    margin: 0 auto;
    
    @media only screen and ${device.tablet} {
        padding: 20px;
    }
    @media only screen and ${device.desktop} {
        padding: 60px;
    }
`
export const StyledHead = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;    
    padding: 20px 20px 0;
    margin-bottom: 20px;
    
    @media only screen and ${device.tablet} {
        padding: 40px;
    }
    @media only screen and ${device.desktop} {
        padding: 60px;
    }
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
    margin-right: 10px;
`
