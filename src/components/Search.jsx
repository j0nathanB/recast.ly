var Search = (props) => {

	var handleSearch = (event) => {
		props.searchHandlerFunction(event.target.value + event.key);
	};
	return (
	  <div className="search-bar form-inline">
	    <input className="form-control" type="text" onKeyPress={handleSearch}/>
	    <button className="btn hidden-sm-down">
	      <span className="glyphicon glyphicon-search"></span>
	    </button>
	  </div> 
	);
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
