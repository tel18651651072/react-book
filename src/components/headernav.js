import React from 'react';
import { Link, RouteHandler } from 'react-router';
var Headernav = React.createClass({
	 render: function() {
	 	return (
	 		<div>
	 		   <nav>
	 		       <div className="container">
	 		          <a href="/" className="header-logo">Aissues</a>
	 		          <ul className="navbar">
	 		              <li><Link to="/" activeClassName="active">首页</Link></li>
	 		              <li><Link to="/fndpage" activeClassName="active">前端</Link></li>
	 		              <li><Link to="/andpage" activeClassName="active">Android</Link></li>
	 		              <li><Link to="/mbpage" activeClassName="active">移动端</Link></li>
	 		              <li><Link to="/optpage" activeClassName="active">运维</Link></li>
	 		          </ul>
	 		          <div className="search-box">
	 		              <input placeholder="搜索"/>
	 		          </div>
	 		       </div>
	 		   </nav>
	 		</div>
	 		)
	 }
});
export default Headernav