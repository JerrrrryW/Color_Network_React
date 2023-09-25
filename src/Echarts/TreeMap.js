import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const TreeMap = () => {
  useEffect(() => {
    // 创建一个ECharts实例并将其挂载到指定的DOM元素上
    const chartContainer = document.getElementById('echarts-treemap');
    const chart = echarts.init(chartContainer);

    const data = {
      "name": "flare",
      "children": [
       {
        "name": "analytics",
        "children": [
         {
          "name": "cluster",
         },
         {
          "name": "graph",
         },
        ]
       },
       {
        "name": "animate",
        "children": [
         {"name": "Easing", "value": 17010},
         {"name": "FunctionSequence", "value": 5842},
         {
          "name": "interpolate",
         },
         {"name": "ISchedulable", "value": 1041},
         {"name": "Parallel", "value": 5176},
         {"name": "Pause", "value": 449},
         {"name": "Scheduler", "value": 5593},
         {"name": "Sequence", "value": 5534},
         {"name": "Transition", "value": 9201},
         {"name": "Transitioner", "value": 19975},
         {"name": "TransitionEvent", "value": 1116},
         {"name": "Tween", "value": 6006}
        ]
       },
       {
        "name": "data",
        "children": [
         {
          "name": "converters","value":1000
         },
         {"name": "DataField", "value": 1759},
         {"name": "DataSchema", "value": 2165},
         {"name": "DataSet", "value": 586},
         {"name": "DataSource", "value": 3331},
         {"name": "DataTable", "value": 772},
         {"name": "DataUtil", "value": 3322}
        ]
       },
       {
        "name": "display",
        "children": [
         {"name": "DirtySprite", "value": 8833},
         {"name": "LineSprite", "value": 1732},
         {"name": "RectSprite", "value": 3623},
         {"name": "TextSprite", "value": 10066}
        ]
       },
       {
        "name": "flex",
        "children": [
         {"name": "FlareVis", "value": 4116}
        ]
       },
       {
        "name": "physics",
        "children": [
         {"name": "DragForce", "value": 1082},
         {"name": "GravityForce", "value": 1336},
         {"name": "IForce", "value": 319},
         {"name": "NBodyForce", "value": 10498},
         {"name": "Particle", "value": 2822},
         {"name": "Simulation", "value": 9983},
         {"name": "Spring", "value": 2213},
         {"name": "SpringForce", "value": 1681}
        ]
       },
       {
        "name": "query",
        "children": [
         {"name": "AggregateExpression", "value": 1616},
         {"name": "And", "value": 1027},
         {"name": "Arithmetic", "value": 3891},
         {"name": "Average", "value": 891},
         {"name": "BinaryExpression", "value": 2893},
         {"name": "Comparison", "value": 5103},
         {"name": "CompositeExpression", "value": 3677},
         {"name": "Count", "value": 781},
         {"name": "DateUtil", "value": 4141},
         {"name": "Distinct", "value": 933},
         {"name": "Expression", "value": 5130},
         {"name": "ExpressionIterator", "value": 3617},
         {"name": "Fn", "value": 3240},
         {"name": "If", "value": 2732},
         {"name": "IsA", "value": 2039},
         {"name": "Literal", "value": 1214},
         {"name": "Match", "value": 3748},
         {"name": "Maximum", "value": 843},
         {"name": "Minimum", "value": 843},
         {"name": "Not", "value": 1554},
         {"name": "Or", "value": 970},
         {"name": "Query", "value": 13896},
         {"name": "Range", "value": 1594},
         {"name": "StringUtil", "value": 4130},
         {"name": "Sum", "value": 791},
         {"name": "Variable", "value": 1124},
         {"name": "Variance", "value": 1876},
         {"name": "Xor", "value": 1101}
        ]
       },
       {
        "name": "scale",
        "children": [
         {"name": "IScaleMap", "value": 2105},
         {"name": "LinearScale", "value": 1316},
         {"name": "LogScale", "value": 3151},
         {"name": "OrdinalScale", "value": 3770},
         {"name": "QuantileScale", "value": 2435},
         {"name": "QuantitativeScale", "value": 4839},
         {"name": "RootScale", "value": 1756},
         {"name": "Scale", "value": 4268},
         {"name": "ScaleType", "value": 1821},
         {"name": "TimeScale", "value": 5833}
        ]
       },
       {
        "name": "util",
        "children": [
         {"name": "Arrays", "value": 8258},
         {"name": "Colors", "value": 10001},
         {"name": "Dates", "value": 8217},
         {"name": "Displays", "value": 12555},
         {"name": "Filter", "value": 2324},
         {"name": "Geometry", "value": 10993},
         {"name": "IEvaluable", "value": 335},
         {"name": "IPredicate", "value": 383},
         {"name": "IValueProxy", "value": 874},
         {"name": "Maths", "value": 17705},
         {"name": "Orientation", "value": 1486},
         {"name": "Property", "value": 5559},
         {"name": "Shapes", "value": 19118},
         {"name": "Sort", "value": 6887},
         {"name": "Stats", "value": 6557},
         {"name": "Strings", "value": 22026}
        ]
       },
      ]
     }
    // 定义图表配置项
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          label: {
            show: false
          },
          type: 'tree',
          data: [data],
          top: 1,
          bottom: 1,
          layout: 'radial',
          symbolSize: 7,
          initialTreeDepth: 3,
          animationDurationUpdate: 750,
          emphasis: {
            focus: 'descendant'
          },
          symbol:"circle",
        }
      ]
    }

    // 使用配置项渲染图表
    chart.setOption(option);

    // 在组件卸载时销毁图表，防止内存泄漏
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="echarts-treemap" style={{ width: '100%', height: '40%' }}></div>
  );
};

export default TreeMap;
