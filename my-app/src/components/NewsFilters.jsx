import React, { Component } from "react";
import PropTypes from 'prop-types';

export class NewsFilters extends Component {
    handleChangeSerch = (e) => {
        let { onChangeSearch } = this.props;
        let { currentTarget } = e;
        onChangeSearch(currentTarget.value);
    };
    render() {
        const { isSpecial, link, photo, search, onChangeIsSpecial, onChangeLink, onChangePhoto, } = this.props;

        return (
            <div className="news__filters__list">
                <label>
                    <input
                        type="checkbox"
                        onChange={() => onChangeIsSpecial(!isSpecial)}
                        checked={isSpecial}
                    /> <span>Filter only isSpecial</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => onChangeLink(!link)}
                        checked={link}
                    /> <span>Filter has link</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => onChangePhoto(!photo)}
                        checked={photo}
                    /> <span>Filter has photo</span>
                </label>
                <div>
                    <label>
                        <input className="news__search" type="text" value={search} onChange={this.handleChangeSerch} />
                    </label>
                </div>
            </div>
        )
    }
}

NewsFilters.propTypes = {
    isSpecial: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    onChangeIsSpecial: PropTypes.func.isRequired,
    onChangeLink: PropTypes.func.isRequired,
    onChangePhoto: PropTypes.func.isRequired,
    onChangeSearch: PropTypes.func.isRequired,
};
NewsFilters.defaultProps = {};