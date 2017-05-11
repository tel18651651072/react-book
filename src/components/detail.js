import React from 'react';
import Headernav from './headernav';
var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <Headernav/>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});
export default Detail