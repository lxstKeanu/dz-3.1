import React, { Component } from "react";
import { NewsFilters } from "./NewsFilters";
import { NewsList } from "./NewsList";
import someData from "./news.json"

export class NewsMain extends Component{
    state = {
        isSpecial: false,
        link: false,
        photo: false,
        search: '',
    };

    render() {

        const { isSpecial, link, photo, search } = this.state;
        const NewsToRender = someData.filter((el) => {
            if (isSpecial && !el.isSpecial) return false;
            if (link && !el.link) return false;
            if (photo && !el.photo) return false;
            return !(el.title.toLowerCase().indexOf(search.toLowerCase()) < 0)
                || !(el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)
                || !(el.author.toLowerCase().indexOf(search.toLowerCase()) < 0)
        });

        return (
            <div className="main__main">
                <div className="news__main__filters">
                    <NewsFilters
                        isSpecial={isSpecial}
                        link={link}
                        photo={photo}
                        search={search}
                        onChangeIsSpecial={(newIsSpecial) => this.setState({ isSpecial: newIsSpecial })}
                        onChangeLink={(newLink) => this.setState({ link: newLink })}
                        onChangePhoto={(newPhoto) => this.setState({ photo: newPhoto })}
                        onChangeSearch={(newSearch) => this.setState({ search: newSearch })}
                    />
                </div>
                <div className="new__list">
                    <NewsList items={NewsToRender} />
                </div>
            </div>
        );
    };
}
