'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import Headernav from './headernav';
import Fndpage from './fndpage';
import Andpage from './andpage';
import Mbpage from './mbpage';
import Optpage from './optpage';
import Banner from './banner';
import Newbooks from './books';
var App = React.createClass({
    render: function() {
        console.log(this.props.location.query.id)
        return (
            <div>
                <Headernav/>
                <Banner/>
                <div className="books-wrapper">
                   <Newbooks/>
                </div>
                <div>这是首页</div>
            </div>
        );
    },

});

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/fndpage' component={Fndpage} />
        <Route path='/andpage' component={Andpage} />
        <Route path='/mbpage' component={Mbpage} />
        <Route path='/optpage' component={Optpage} />
    </Router>
), document.getElementById('app'));
