import React, { FC, useState } from 'react';
import { BarChart } from './BarChart';
import { StyledAppOption, StyledDashboard, StyledHead, StyledLeft, StyledRight } from '../styled/Dashboard.styled';
import { DashboardTypes } from '../types/Dashboard.types';
import { PopulationDataType } from '../../../data/types';

export const Dashboard: FC<DashboardTypes> = ({ data: populationData }) => {
    const [data, setData] = useState<PopulationDataType>(populationData);
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
            <BarChart data={data}/>
        </StyledDashboard>
    )
}
