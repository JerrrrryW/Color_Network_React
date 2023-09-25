import React, { useEffect,useRef } from 'react';
import * as echarts from 'echarts';

const HeatMap = ({color}) => {
    let xdata = ['1', '2', '3', '4', '5', '6','7', '8'];
    let ydata = [
        'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15'
    ];
    let data = []
        .map(function (item) {
            return [item[0], item[1], item[2] || '-'];
        });
    const flag = useRef(0);
    const C42 = [0.26, 0.26, 0.15, 0.09, 0.35, 0.25, 0.18, 0.2];
    const C38 = [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
    const C36 = [0.16, 0.32, 0.19, 0.11, 0.28, 0.15, 0.22, 0.25, 0.41, 1, 0.5];
    const C41 = [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
    const C33 = [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.31, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7, 1, 1];
    const C40 = [0.16, 0.32, 0.19, 0.11, 0.28, 0.15, 0.22, 0.25, 0.4, 1, 0.5, 1];
    const C35 = [0.22, 0.45, 0.13, 0.16, 0.2, 0.21, 0.32, 0.35, 0.57, 0.7, 0.7, 0.7, 0.7];
    const C34 = [0.16, 0.32, 0.19, 0.11, 0.14, 0.15, 0.22, 0.25, 0.41];
    
    useEffect(() => {  
        if(color === 'C42' && flag.current>=0 && flag.current <=7){
            xdata[flag.current] = color;
            for (let i = 0; i < C42.length; i++) {
                const element = C42[i];
            
                // 创建一个三元数组并填充
                const triple = [flag.current, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag.current += 1;
            console.log('flag:',xdata);
        }
        if(color === 'C38' && flag.current>=0 && flag.current <=7){
            xdata[flag.current] = color;
            for (let i = 0; i < C38.length; i++) {
                const element = C38[i];
            
                // 创建一个三元数组并填充
                const triple = [flag.current, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag.current += 1;
            console.log('flag:',xdata);
        }
        if(color === 'C36' && flag>=0 && flag <=7){
            xdata[flag] = color;
            for (let i = 0; i < C36.length; i++) {
                const element = C36[i];
            
                // 创建一个三元数组并填充
                const triple = [flag, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag++;
            console.log('flag:',flag);
        }
        if(color === 'C41' && flag>=0 && flag <=7){
            console.log('C41')
            xdata[flag] = color;
            for (let i = 0; i < C41.length; i++) {
                const element = C41[i];
            
                // 创建一个三元数组并填充
                const triple = [flag, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag++;
            console.log('flag:',flag);
        }
        if(color === 'C33' && flag>=0 && flag <=7){
            xdata[flag] = color;
            for (let i = 0; i < C33.length; i++) {
                const element = C33[i];
            
                // 创建一个三元数组并填充
                const triple = [flag, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag++;
            console.log('C33:',flag);
        }
        if(color === 'C40' && flag>=0 && flag <=7){
            xdata[flag] = color;
            for (let i = 0; i < C40.length; i++) {
                const element = C40[i];
            
                // 创建一个三元数组并填充
                const triple = [flag, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag++;
            console.log('C40:',flag);
        }
        if(color === 'C35' && flag>=0 && flag <=7){
            xdata[flag] = color;
            for (let i = 0; i < C35.length; i++) {
                const element = C35[i];
            
                // 创建一个三元数组并填充
                const triple = [flag, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag++;
            console.log('C35:',flag);
        }
        if(color === 'C34' && flag>=0 && flag <=7){
            xdata[flag] = color;
            for (let i = 0; i < C34.length; i++) {
                const element = C34[i];
            
                // 创建一个三元数组并填充
                const triple = [flag, i, element];
            
                // 将三元数组添加到数组A中
                data.push(triple);
            } 
            flag += 1;
            console.log('C34:',flag);
        }

        // 在组件加载后初始化ECharts实例
        const chart = echarts.init(document.getElementById('echarts-heatmap'));
        // const data = [[0, 0, 5], [0, 1, 1], [0, 2, 5], [0, 3, 4], [4, 0, 0], [5, 0, 0], [6, 0, 0], [7, 0, 0], [8, 0, 0]]
        //     .map(function (item) {
        //         return [item[0], item[1], item[2] || '-'];
        //     });


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
    }, [C33, C34, C35, C36, C38, C40, C41, C42, color, data, flag, xdata, ydata]);

    return <div id="echarts-heatmap" style={{ width: '100%', height: '100%' }} />;
};

export default HeatMap;
