import React, { Component } from 'react'
import Item from './Item'
import Loader from './Loader';

export default class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: this.props.page,
            totalPage: this.props.totalPage,
            pageSize: this.props.pageSize,
            country: this.props.country,
            category: this.props.category,
            apikey: this.props.apikey,
            loading: true
        }
    }
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    previousNews = async ()=>{
        this.setState({loading:true})
        const raw_data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.category}&page=${this.state.page-1}&pageSize=${this.state.pageSize}&apiKey=${this.state.apikey}`);
        let data = await raw_data.json();
        this.setState({ 
            page: this.state.page-1,
            articles: data.articles,
            loading: false,
        });
    }
    
    nextNews = async ()=>{
        this.setState({loading:true})
        const raw_data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.category}&page=${this.state.page+1}&pageSize=${this.state.pageSize}&apiKey=${this.state.apikey}`);
        let data = await raw_data.json();
        this.setState({ 
            page: this.state.page+1,
            articles: data.articles,
            loading: false,
        });
    }

    async componentDidMount() {
        this.setState({loading:true})
        const raw_data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=${this.state.apikey}`);
        let data = await raw_data.json();
        this.setState({ 
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        });
    }

    render() {
        document.title = "RF | " + this.capitalizeFirstLetter(this.state.category);
        return (
            <div className="container">
                <div className="container my-2">
                    <h1 className="text-center my-5">Top HeadLines on {this.capitalizeFirstLetter(this.state.category)}</h1>
                    {this.state.loading && <Loader />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <Item mode={this.props.mode} key={element.url} title={element.title} newsUrl={element.url} imageUrl={element.urlToImage !== null ? element.urlToImage : "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/348800/348870.6.jpg"} author={element.author !== null ? element.author : "no author"} date={element.publishedAt} />
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between m-4 p-4">
                    <button disabled={this.state.page<=1} className="btn btn-primary" type="button" onClick={this.previousNews}>Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" type="button" onClick={this.nextNews}>Next</button>
                </div>
            </div>
        )
    }
}
