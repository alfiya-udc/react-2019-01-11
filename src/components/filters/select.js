import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux';
import {filterBySelect} from '../../ac'

class SelectFilter extends Component {
    
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selectedOption}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.props.filterBySelect(selectedOption)
    }
}

export default connect(
    (store) => ({
        articles: store.articles,
        selected: store.filter.selectedOption
    }),
    {filterBySelect}
)(SelectFilter)
