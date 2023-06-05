import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filterChange, valueFilter } = this.props;
    return (
      <>
        <span>Finde contacts by name</span>
        <input
          type="text"
          name="filter"
          onChange={filterChange}
          value={valueFilter}
        />
      </>
    );
  }
}
