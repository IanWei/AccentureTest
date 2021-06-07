import React, { FC, useEffect, useRef } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { XYChart } from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BarChartTypes } from '../types/BarChart.types';
import { StyledChart } from '../styled/BarChart.styled';
import { color } from '../../../common/styled/palette';
import { getPopulation, getText, minMaxPopulationIndex, mostDigits } from '../utils/utils';
import { device } from '../../../globalStyles';

am4core.useTheme(am4themes_animated);

export const BarChart: FC<BarChartTypes> = ({ data }) => {
    const chartRef = useRef<XYChart>();
    const sizeRef = useRef('mobile');
    const populationNums = getPopulation(data);
    const mostDigit = mostDigits(populationNums);
    const maxPopulationIndex = minMaxPopulationIndex(populationNums);
    const minPopulationIndex = minMaxPopulationIndex(populationNums, 'min');

    useEffect(() => {
        let size = 'mobile';
        if (window.matchMedia(`${device.tablet}`).matches) size = 'tablet';
        if (window.matchMedia(`${device.desktop}`).matches) size = 'desktop';
        sizeRef.current = size;
    }, []);

    useEffect(() => {
        chartRef.current = am4core.create('bar-chart', am4charts.XYChart);
        chartRef.current.data = data;

        // Add X Axis
        let xAxis = chartRef.current.xAxes.push(new am4charts.ValueAxis());
        xAxis.min = 0;
        xAxis.renderer.minGridDistance = 150;
        xAxis.renderer.maxLabelPosition = .95;
        xAxis.renderer.grid.template.strokeOpacity = .2;
        xAxis.renderer.grid.template.stroke = am4core.color(color.gray);
        xAxis.renderer.grid.template.strokeDasharray = '15 5';
        xAxis.renderer.labels.template.fill = am4core.color(color.mineShaft);
        xAxis.renderer.labels.template.fontSize = sizeRef.current === 'desktop' ? 18 : sizeRef.current === 'tablet' ? 16 : 12;
        xAxis.renderer.labels.template.adapter.add('text', (text) => {
            return getText(mostDigit, text);
        });

        // Add Y Axis
        let yAxis = chartRef.current.yAxes.push(new am4charts.CategoryAxis());
        yAxis.dataFields.category = 'Year';
        yAxis.renderer.grid.template.location = 0;
        yAxis.renderer.cellStartLocation = 0.2;
        yAxis.renderer.cellEndLocation = 0.9;
        yAxis.renderer.grid.template.strokeOpacity = 0;
        yAxis.renderer.labels.template.adapter.add('fill', (fill, target) => {
            if (target.dataItem && target.dataItem.index === minPopulationIndex) {
                return am4core.color(color.scarlet)
            }
            return am4core.color(color.mineShaft);
        });
        yAxis.renderer.labels.template.fontSize = sizeRef.current === 'desktop' ? 18 : sizeRef.current === 'tablet' ? 16 : 12;
        yAxis.renderer.inversed = true;

        // Create series
        let series = chartRef.current.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = "Population";
        series.dataFields.categoryY = "Year";
        series.name = "Population";
        series.fillOpacity = 1;
        series.columns.template.adapter.add('fill', (fill, target) => {
            if (target.dataItem && target.dataItem.index === maxPopulationIndex) {
                return am4core.color(color.turbo)
            }
            if (target.dataItem && target.dataItem.index === minPopulationIndex) {
                return am4core.color(color.scarlet)
            }
            return am4core.color(color.grass);
        })
        series.strokeWidth = 0;
        series.columns.template.column.cornerRadius(5, 5, 5, 5);

        // Series tooltip
        series.tooltipText = '{categoryY}: [bold]{valueX}[/]';
        if (!series.tooltip) return;
        series.tooltip.pointerOrientation = 'left';
        series.tooltip.dy = -5;
        series.tooltip.dx = sizeRef.current === 'desktop' ? 0 : sizeRef.current === 'tablet' ? -50 : -100;
        series.tooltip.background.filters.clear()
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color('#2a2b2e');
        series.tooltip.background.stroke = am4core.color('#2a2b2e');

        // Add cursor
        chartRef.current.cursor = new am4charts.XYCursor();

        // Disable axis lines
        chartRef.current.cursor.lineX.disabled = true;
        chartRef.current.cursor.lineY.disabled = true;

        // Disable axis tooltips
        xAxis.cursorTooltipEnabled = false;
        yAxis.cursorTooltipEnabled = false;

        // Disable zoom
        chartRef.current.cursor.behavior = 'none';
        return () => {
            chartRef.current && chartRef.current.dispose();
        }
    }, [data, mostDigit, maxPopulationIndex, minPopulationIndex])
    return (
        <StyledChart id='bar-chart' title='bar-chart'/>
    )
}
