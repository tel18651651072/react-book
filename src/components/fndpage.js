import React from 'react';
import Headernav from './headernav';
var Fndpage = React.createClass({
    render: function() {
        return (
            <div>
                <Headernav/>
                <div>这是前端页</div>
            </div>
        );
    }
});

export default Fndpage