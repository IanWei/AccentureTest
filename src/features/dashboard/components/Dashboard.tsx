import React from 'react';
import { BarChart } from './BarChart';
import { StyledAppOption, StyledDashboard, StyledHead, StyledLeft, StyledRight } from '../styled/Dashboard.styled';

export const Dashboard = () => {
    return (
        <StyledDashboard>
            <StyledHead>
                <StyledLeft>
                    <StyledAppOption>
                        App experience:
                    </StyledAppOption>
                </StyledLeft>
                <StyledRight>Last 7 years</StyledRight>
            </StyledHead>
            <BarChart />
        </StyledDashboard>
    )
}
