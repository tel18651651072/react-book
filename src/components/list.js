import React from 'react';
import Headernav from './headernav';
var List = React.createClass({
    render: function() {
        return (
            <div>
                <Headernav/>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
});

export default List