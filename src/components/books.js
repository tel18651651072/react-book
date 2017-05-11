import React from 'react';
import 'whatwg-fetch';
import 'es6-promise';
import Title from './title';
import Recommentbooks from './recommendbooks'
var Newbooks = React.createClass({
	getInitialState:function() {
       return {
       	  newbooks:[],
       	  title:''
       }
	},
	componentDidMount:function() {
		var result = fetch('http://aissues.com/api/public/get_new_books.php',{});
	    result.then(res => {
	    	return res.json()
	    }).then(json => {
	    	// console.log(json.data)
	    	this.setState({
                newbooks:json.data
	    	})
	    })
	},
	render() {
		var newbooks=this.state.newbooks;
		return (
			<div>
			   <div className="newbooks-wrapper">
                  <Title title="最新小书"/>
                  <div className="newbooks-container">
                    {newbooks.map(function(newbook,index) {
                    	return (
                    		<a key={index} href={'http://aissues.com/book.php?id='+newbook.bookid}>
		                        <div className="newbooks-name name_ell">{newbook.bookname}</div>
		                        <div className="newbooks-time name_ell">{newbook.time}</div>
		                    </a>
                    		)
	                 })}
                      
                  </div>
			   </div>
			   <Recommentbooks/>
			</div>
			)
	}
})
export default Newbooks