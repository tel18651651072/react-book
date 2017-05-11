import React from 'react';
import Headernav from './headernav';
var Mbpage = React.createClass({
    render: function() {
        return (
            <div>
                <Headernav/>
                <div>这是移动页</div>
            </div>
        );
    }
});

export default Mbpage