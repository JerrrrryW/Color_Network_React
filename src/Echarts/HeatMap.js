import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const HeatMap = ({ colors }) => {
    const xdata = colors;  // Use the colors array for x-axis
    // const colors = ['C42', 'C38', 'C36', 'C41', 'C33', 'C40', 'C35', 'C34'];
    const ydata = [
        'C1', 'C56', 'C16', 'C6', 'C17', 'C18', 'C39', 'C20', 'C42', 'C37', 'C34', 'C36', 'C40', 'C35', 'C38'
    ]
    const data = [];
    const getColorValues = (color) => {
        switch (color) {
            case 'C42': return [0.26, 0.26, 0.15, 0.09, 0.35, 0.25, 0.18, 0.2];
            case 'C38': return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
            case 'C36': return [0.16, 0.32, 0.19, 0.11, 0.28, 0.15, 0.22, 0.25, 0.41, 1, 0.5];
            case 'C41': return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
            case 'C33': return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
            case 'C40': return [0.16, 0.32, 0.19, 0.11, 0.28, 0.15, 0.22, 0.25, 0.4, 1, 0.5, 1];
            case 'C35': return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.32, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7];
            case 'C34': return [0.16, 0.32, 0.19, 0.11, 0.14, 0.15, 0.22, 0.25, 0.41];
            default:
                return [];
        }
    };
    // const flag = useRef(0);

    useEffect(() => {
        console.log('colors:', colors);
        
        // while (flag.current >= 0 && flag.current < colors.length) {
        //     const color = colors[flag.current];
        //     const values = getColorValues(color);

        //     xdata[flag.current] = color;
        //     for (let i = 0; i < values.length; i++) {
        //         const element = values[i];
        //         const triple = [flag.current, i, element];
        //         data.push(triple);
        //     }

        //     flag.current += 1;
        // }
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const values = getColorValues(color);

            xdata[i] = color;
            for (let j = 0; j < values.length; j++) {
                const element = values[j];
                const triple = [i, j, element];
                data.push(triple);
            }
        }


        console.log('data', data)
        const chart = echarts.init(document.getElementById('echarts-heatmap'));

        // 定义图表配置
        const nodeLabelScale = 20;
        const colorCodesX = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF4500', '#8B4513'];
        const colorCodesY = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF4500', '#8B4513', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF4500', '#8B4513'];
        const option = {
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 5,
                containLabel: true
            },
            tooltip: {
                position: 'top'
            },
            xAxis: {
                type: 'category',
                data: xdata,
                splitLine: {
                    show: false // 设置为false即可隐藏y轴上的网格线
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false // 设置为false即可隐藏x轴线
                },
                axisLabel: {
                    interval: 0,
                    formatter: function (value) {
                        const index = colors.indexOf(value);
                        if (index !== -1) {
                            const color = colorCodesX[index];
                            return `{div${value}|}`;
                        }
                    },
                    rich: {
                        divC42: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(190,148,72)',
                            borderRadius: nodeLabelScale/2, 
                            lineHeight: 10,
                        },
                        divC38: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(18,60,76)',
                            borderRadius: nodeLabelScale/2, 
                            lineHeight: 10,
                        },
                        divC36: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(69,130,96)',
                            borderRadius: nodeLabelScale/2,  
                            lineHeight: 10,
                        },
                        divC41: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(127,0,0)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC33: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(56,102,76)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC40: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(27,88,98)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC35: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(20,66,56)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC34: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(21,40,38)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: ydata,
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false // 设置为false即可隐藏y轴上的网格线
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false // 设置为false即可隐藏x轴线
                },
                axisLabel: {
                    formatter: function (value) {
                        const index = ydata.indexOf(value);
                        if (index !== -1) {
                            const color = colorCodesX[index];
                            return `{div${value}|}`;
                        }
                    },
                    rich: {
                        divC42: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(190,148,72)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC38: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(18,60,76)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC36: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(69,130,96)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC1: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(10,10,10)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC40: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(27,88,98)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC35: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(20,66,56)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC34: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(21,40,38)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC37: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(91,99,71)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC20: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(70,75,54)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC39: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(154,118,116)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC18: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(83,69,40)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC17: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(114,99,60)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC6: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(85,85,85)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC16: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(149,124,84)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                        divC56: {
                            width: nodeLabelScale,
                            height: nodeLabelScale,
                            backgroundColor: 'rgb(131,81,67)',
                            borderRadius: nodeLabelScale/2,
                            lineHeight: 10,
                        },
                    }
                },
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%',
                show: false
            },
            series: [
                {
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: data,
                    label: {
                        show: true
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        // 设置图表配置项
        chart.setOption(option);

        // 清理资源
        return () => {
            chart.dispose();
        };
    }, [colors, data, xdata]);




    return <div id="echarts-heatmap" style={{ width: '100%', height: '100%' }} />;
};

export default HeatMap;
