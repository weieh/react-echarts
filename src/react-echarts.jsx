require('./less/main.css');
import React from 'react';
import classNames from 'classnames';
import 'babel-polyfill';
import echarts from 'echarts';

class ReactEcharts extends React.Component {
    constructor (props) {
    	super(props);
        this.state = {
        	lineData:[0,34,23,76,45,45,98,65,74,34,26,35],
        	monthData:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        };
    }

    componentDidMount(){
    	this.drawLineCharts(this.state.lineData,this.state.monthData);
    }

    drawLineCharts(lineData,monthData){
        var myChart = echarts.init(document.getElementById('charts'));
        // 指定图表的配置项和数据
        
        var lineOption = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['邮件营销']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            data : monthData,
		            axisLabel: {
	                    show: true,//是否显示刻度标签
	                    interval:0,//横轴信息全部显示
	                    textStyle: {
	                        fontSize: 8,
	                    }
	                }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'邮件营销',
		            type:'line',
		            stack: '总量',
		            areaStyle: {normal: {}},
		            data:lineData
		        }
		    ]
		};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(lineOption);
        window.addEventListener('resize', function () {
			myChart.resize();
		});
    }

    render(){
        return(
        	<div id="charts"></div>
        );
    }
}
export default ReactEcharts;