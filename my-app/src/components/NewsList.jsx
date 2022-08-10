import React, { Component} from "react";
import PropTypes  from "prop-types";
import { NewsItem} from "./NewsItem";

export class NewsList extends Component{
    render() {
        let { items } = this.props;
        return(
            <div className="news__list">
                {items.map((item) => (
                    <NewsItem key={item.id}
                                item={item}
                    ></NewsItem>
                ))}
            </div>
        )
    }
}

NewsList.propTypes = {
    items: PropTypes.array,
};
NewsList.defaultProps = {
    item: [],
};