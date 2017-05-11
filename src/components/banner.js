import React from 'react';
import 'whatwg-fetch';
import 'es6-promise';
var Banner=React.createClass({

	getInitialState:function() {
       return {
       	  bannerUrl:'',
       	  bannerImg:''
       }
	},
	componentDidMount:function() {
		var result = fetch('http://aissues.com/api/public/banner.php?num=1',{
		});
		result.then(res=> {
			return res.json()
		}).then(json => {
			this.setState({
				bannerUrl:json.data[0].link,
			    bannerImg:'http://aissues.com'+json.data[0].imgurl
			});
               
		});
	},
	render() {
		return (
			<div>
			   <div className="banner-wrapper">
			      <div className="banner">
			          <a href={this.state.bannerUrl}>
                         <img src={this.state.bannerImg}/>
			          </a>
			      </div>
			      <div className="ads-top">
			          <a href="http://aissues.com/news.php?id=1A8E0FAE-EBE8-4D0D-B24A-511AE2389758">
			              <img src="http://aissues.com/images/site/page_1.png"/>
			          </a>
			          <a href="http://aissues.com/news.php?id=D4F04B3A-EF3D-4CD6-903E-97155A129E95">
			              <img src="http://aissues.com/images/site/page_2.png"/>
			          </a>
			      </div>
			   </div>
			</div>
			)
	}
});
export default Banner