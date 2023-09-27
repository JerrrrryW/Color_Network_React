import React, { useEffect,useRef } from 'react';
import * as echarts from 'echarts';

const HeatMap = ({ colors }) => {
    const xdata = colors;  // Use the colors array for x-axis
    const ydata = [
      'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15'
    ];
    const data = colors.map((color, i) => {
      return [i, 0, 0];  // Initialize data based on the length of colors array
    });
  
    const flag = useRef(0);
  
    useEffect(() => {
      while (flag.current >= 0 && flag.current < colors.length) {
        const color = colors[flag.current];
        const values = getColorValues(color);
        
        xdata[flag.current] = color;
        for (let i = 0; i < values.length; i++) {
          const element = values[i];
          const triple = [flag.current, i, element];
          data.push(triple);
        }
  
        flag.current += 1;
        console.log('flag:', xdata);
      }
  
      const chart = echarts.init(document.getElementById('echarts-heatmap'));  

        // 定义图表配置
        const option = {
            grid: {
                left: 30,
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
                    formatter: function (value) {
                        // 根据不同的类别返回不同颜色的圆形
                        if (value === 'C42') {
                            return '{divC42|}\n\nC42';
                        }
                        if (value === 'C38') {
                            return '{divC38|}\n\nC38';
                        }
                        if (value === 'C36') {
                            return '{divC36|}\n\nC36';
                        }
                        if (value === 'C41') {
                            return '{divC41|}\n\nC41';
                        }
                        if (value === 'C33') {
                            return '{divC33|}\n\nC33';
                        }
                        if (value === 'C40') {
                            return '{divC40|}\n\nC40';
                        }
                        if (value === 'C35') {
                            return '{divC35|}\n\nC35';
                        }
                        if (value === 'C34') {
                            return '{divC34|}\n\nC34';
                        }
                    },
                    rich: {
                        divC42: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC38: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC36: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC41: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC33: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC40: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC35: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC34: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
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
                        // 根据不同的类别返回不同颜色的圆形
                        if (value === 'C42') {
                            return '{divC42|}C42';
                        }
                        if (value === 'C38') {
                            return '{divC38|}C38';
                        }
                        if (value === 'C36') {
                            return '{divC36|}C36';
                        }
                        if (value === 'C41') {
                            return '{divC41|}C41';
                        }
                        if (value === 'C33') {
                            return '{divC33|}C33';
                        }
                        if (value === 'C40') {
                            return '{divC40|}C40';
                        }
                        if (value === 'C35') {
                            return '{divC35|}C35';
                        }
                        if (value === 'C34') {
                            return '{divC34|}C34';
                        }
                    },
                    rich: {
                        divC42: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC38: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC36: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC41: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC33: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC40: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC35: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
                        },
                        divC34: {
                            width: 20,
                            height: 20,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            align: 'center',
                            lineHeight: 20,
                            fontSize: 14,
                            color: '#fff',
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
    }, [colors, data, flag, xdata]);

    const getColorValues = (color) => {
        switch (color) {
          case 'C42':
            return [0.26, 0.26, 0.15, 0.09, 0.35, 0.25, 0.18, 0.2];
          case 'C38':
            return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
          case 'C36':
            return [0.16, 0.32, 0.19, 0.11, 0.28, 0.15, 0.22, 0.25, 0.41, 1, 0.5];
          case 'C41':
            return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
          case 'C33':
            return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
          case 'C40':
            return [0.16, 0.32, 0.19, 0.11, 0.28, 0.15, 0.22, 0.25, 0.4, 1, 0.5, 1];
          case 'C35':
            return [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.32, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7];
          case 'C34':
            return [0.16, 0.32, 0.19, 0.11, 0.14, 0.15, 0.22, 0.25, 0.41];
          default:
            return [];
        }
      };
      

    return <div id="echarts-heatmap" style={{ width: '100%', height: '100%' }} />;
};

export default HeatMap;
