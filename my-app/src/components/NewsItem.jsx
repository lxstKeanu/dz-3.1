import React, { Component } from "react";
import PropTypes from 'prop-types';

export class NewsItem extends Component {
    render() {
        let { item } = this.props;

        return (
            <div className="nws">
                <div className="news__main" key={item.id}>
                    <h1 className="news__title">{item.title}</h1>
                    <h2 className="news__content" dangerouslySetInnerHTML={{ __html: item.content }} />
                    <div className="news__scpecial">{item.isSpecial ? "Special" : ""}</div>
                    <div>{item.dateCreated.slice(0, 19)}</div>
                    <div>{item.categories.map((cat) => (
                        <div> key={cat.id}
                            <div>{cat.id}</div>
                            <p>{cat.name}</p>
                        </div>
                    ))}
                    </div>
                    {item.link && <a className="news_link" href={item.link}>{item.link}</a>}
                    {item.photo && <img alt="" src={item.photo + item.id} />}
                    {item.author && <h4>{item.author}</h4>}
                </div>
            </div>
        )
    }
}

NewsItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        isSpecial: PropTypes.bool.isRequired,
        dateCreated: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        link: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired,
};

NewsItem.defaultProps = {};