import React, { ChangeEvent, Component, useState, useEffect, useMemo } from 'react';
import { ISearchBar } from '../../interface/searchbar';
import './searchbar.scss';

const SearchBar = () => {
  const [dataValue, setDataValue] = useState(localStorage.getItem('rssearch') || '');
  // const [dataEdit, setDataEdit] = useState(dataValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDataValue(event.target.value);
  };
  console.log('dataValue', dataValue);

  useEffect(() => {
    // // setDataValue(localStorage.getItem('rssearch') || '');
    // // const value = dataValue ? dataValue : '';
    // // localStorage.setItem('rssearch', value);
    // // console.log('componentDidMount');
    // console.log('--->', dataValue);
    // console.log('dataEdit', dataEdit);
    // setDataEdit(dataValue);
    const value = localStorage.getItem('rssearch');
    if (value) setDataValue(dataValue);
    return () => {
      if (!dataValue) return;
      const value = dataValue;
      localStorage.setItem('rssearch', value);
      // console.log('===>', dataValue);
      // setDataEdit(dataValue);
      // console.log('dataEdit', dataEdit);
      // // console.log('componentWillMount');
      // // console.log(dataValue !== localStorage.getItem('rssearch'));
      // // if (dataValue !== localStorage.getItem('rssearch')) {
      // //   const value = dataValue ? dataValue : '';
      // //   localStorage.setItem('rssearch', value);
      // // }
    };
    // }, []);
  }, [dataValue]);

  return (
    <div className="main__search-input">
      <input
        className="main__search"
        data-testid="search-input"
        type="search"
        placeholder="enter search..."
        onChange={(event) => handleChange(event)}
        // value={dataValue ? dataValue : ''}
        value={dataValue}
      />
    </div>
  );
};

class SearchBarOld extends Component<ISearchBar, { data: string }> {
  dataSearch(event: ChangeEvent) {
    const valueInput: Element = event.target;
    if (valueInput instanceof HTMLInputElement) {
      this.setState({ data: valueInput.value });
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
          data-testid="search-input"
          type="search"
          placeholder="enter search..."
          onChange={(event) => this.dataSearch(event)}
          value={this.state ? this.state.data : ''}
        />
      </div>
    );
  }
}

export { SearchBar };
