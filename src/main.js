import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'babel-polyfill';

import ReactEcharts from './react-echarts.jsx';

ReactDOM.render(
	<Router history = {hashHistory} >
        <route path ="/" component={ReactEcharts} />
    </Router>,
	document.getElementById('app')
)