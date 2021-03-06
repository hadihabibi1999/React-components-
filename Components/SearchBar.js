import React, {Component} from 'react';

class SearchBar extends Component {

    render() {
        const {onChange}=this.props;
        return (
            <form className="form-inline d-inline">
                <input className="form-control ml-2 " type="search" name="search" placeholder="Search" aria-label="Search" onChange={onChange} />
            </form>
        );
    }
}

export default SearchBar;
