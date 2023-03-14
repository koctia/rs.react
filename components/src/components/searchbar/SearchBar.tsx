import React, { ChangeEvent, Component } from 'react';
import { ISearchBar } from '../../interface/searchbar';
import './searchbar.scss';

class SearchBar extends Component<ISearchBar, { data: string }> {
  dataSearch(event: ChangeEvent) {
    const valueInput: Element = event.target;
    if (valueInput instanceof HTMLInputElement) {
      this.setState({ data: valueInput.value });
      // localStorage.setItem('rssearch', valueInput.value);
    }
  }

  componentDidMount() {
    const value = localStorage.getItem('rssearch');
    if (!value) return;
    if (value) this.setState({ data: value });
  }

  componentWillUnmount() {
    if (!this.state) return;
    const value = this.state.data;
    localStorage.setItem('rssearch', value);
  }

  render() {
    return (
      <div className="main__search-input">
        <input
          className="main__search"
          type="search"
          placeholder="enter search..."
          onChange={(event) => this.dataSearch(event)}
          value={this.state ? this.state.data : ''}
        />
      </div>
    );
  }
}

export default SearchBar;
