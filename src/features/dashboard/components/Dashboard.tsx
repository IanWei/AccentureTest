import React, { FC, useState } from 'react';
import { BarChart } from './BarChart';
import { StyledAppOption, StyledDashboard, StyledHead, StyledLeft, StyledRight } from '../styled/Dashboard.styled';
import { DashboardTypes } from '../types/Dashboard.types';
import { PopulationDataType } from '../../../data/types';
import { DropDown } from './DropDown';
import { YearOptions, YearOptionType } from '../constant/options';

export const Dashboard: FC<DashboardTypes> = ({ data: populationData }) => {
    const [data, setData] = useState<PopulationDataType>(populationData.slice(0, 7));
    const [selectedOption, setSelectedOption] = useState(YearOptionType.Last7Years);

    // Note: selectYearOption function is simply demo the bar chart data can be altered by option
    const selectYearOption = (option: YearOptionType) => {
        if (selectedOption !==  YearOptionType.Last7Years && option === YearOptionType.Last7Years) {
            const updatedData = populationData.slice(0, 7);
            setSelectedOption(YearOptionType.Last7Years)
            setData(updatedData);
        }

        if (selectedOption !==  YearOptionType.Last6Years && option === YearOptionType.Last6Years) {
            const updatedData = populationData.slice(0, 6);
            setSelectedOption(YearOptionType.Last6Years)
            setData(updatedData);
        }

        if (selectedOption !==  YearOptionType.Last5Years && option === YearOptionType.Last5Years) {
            const updatedData = populationData.slice(0, 5);
            setSelectedOption(YearOptionType.Last5Years)
            setData(updatedData);
        }

        if (selectedOption !==  YearOptionType.From2013To2018 && option === YearOptionType.From2013To2018) {
            const updatedData = populationData.slice(1, 7);
            setSelectedOption(YearOptionType.From2013To2018)
            setData(updatedData);
        }
    }

    return (
        <StyledDashboard>
            <StyledHead>
                <StyledLeft>
                    <StyledAppOption>
                        App experience:
                    </StyledAppOption>
                    <DropDown selectedOption='General' options={[]} selectOption={() => {}} />
                </StyledLeft>
                <StyledRight>
                    <DropDown selectedOption={selectedOption} options={YearOptions} selectOption={selectYearOption} />
                </StyledRight>
            </StyledHead>
            <BarChart data={data}/>
        </StyledDashboard>
    )
}
