import React from 'react';
import 'whatwg-fetch';
import 'es6-promise';
var Recommentbooks=React.createClass({
	getInitialState:function() {
         return {
         	recommentbooks:[],
         	bookids:[]
         }
	},
	componentDidMount:function() {
         var result = fetch('http://aissues.com/base/api/index_set/get.php',{});
	     result.then(res => {
	     	return res.json()
	     }).then(json => {
	     	// console.log(json.data)
	     	this.setState({
	     		bookids:json.data
	     	})
	     	let params = {bookids:this.state.bookids};
			var result1=fetch('http://aissues.com/api/public/get_book_id.php',{
		     	method:'POST',
		     	headers:{
		     		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
		     	},
		     	body:JSON.stringify(params)
		     });
		     result1.then(res => {
		     	return res.json()
		     }).then(json => {
		     	this.setState({
		     		recommentbooks:json.data
		     	})
		     })
		});
	},
	render() {
		var recommentbooks=this.state.recommentbooks;
		return (
                <div className="recommentbooks-wrapper">
                    {recommentbooks.map(function(recommentbook,index) {
                    	return (
                    		<div className="book-item" key={index}>
                    		    <a href={'http://aissues.com/book.php?id='+recommentbook.bookid}>
                    		       <img src={'http://aissues.com'+recommentbook.bookimg}/>
                    		       <p className="bookname name_ell">{recommentbook.bookname}</p>
                    		    </a>
                    		</div>
                    		)
                    })}
                </div>
			)
	}
});
export default Recommentbooks