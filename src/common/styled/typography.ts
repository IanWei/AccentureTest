import styled from 'styled-components';
import { device } from '../../globalStyles';

export const PrimaryCap = styled.h3`
    font-family: 'brandon-grotesque', sans-serif;
    font-size: 20px;
    line-height: 30px;
    
    @media only screen and ${device.tablet} {
        font-size: 28px;
        line-height: 35px;
    }
    
    @media only screen and ${device.desktop} {
        font-size: 32px;
        line-height: 40px;
    }
`

export const Primary = styled.h4`
    font-family: 'brandon-grotesque', sans-serif;
    font-size: 20px;
    line-height: 30px;
    
    @media only screen and ${device.desktop} {
        font-size: 24px;
    }
`

export const Secondary = styled.h5`
    font-family: 'brandon-grotesque', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`

export const Tertiary = styled.p`
    font-family: 'bitter', sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;    
`

export const TertiarySmall = styled.p`
    font-family: 'bitter', sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400; 
`
