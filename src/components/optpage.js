import React from 'react';
import Headernav from './headernav';
var Optpage = React.createClass({
    render: function() {
        return (
            <div>
                <Headernav/>
                <div>这是运维页</div>
            </div>
        );
    }
});

export default Optpage