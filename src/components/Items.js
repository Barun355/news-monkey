import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            articles: [],
            page: this.props.page,
            pageSize: this.props.pageSize,
            country: this.props.country,
            category: this.props.category,
            apikey: this.props.apikey
        }
    }
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async componentDidMount(){
        let raw_data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.state.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=${this.state.apikey}`);
        let data = await raw_data.json();
        this.setState({articles: data.articles});
        console.log(this.state.articles);
    }

    render() {
        document.title = "RF | " +this.capitalizeFirstLetter(this.state.category) ;
        return (
            <div className="container my-2">
                <h1 className="text-center my-5">Top HeadLines on {this.capitalizeFirstLetter(this.state.category)}</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <Item key={element.url} title={element.title} newsUrl={element.url} imageUrl={element.urlToImage!==null?element.urlToImage:"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/348800/348870.6.jpg"} author={element.author!==null?element.author:"no author"} date={element.publishedAt}/>
                    })}
                </div>
            </div>
        )
    }
}
 