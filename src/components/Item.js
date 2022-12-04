import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className={`card ${"text-bg-"+this.props.mode} col-md-4 m-1 p-0 `} style={{width: "20rem"}}>
                <img src={this.props.imageUrl} className="card-img-top" alt="..." style={{height:"13rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p>{new Date(this.props.date).toUTCString()}</p>
                    <a href={this.props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
                <div className="d-flex flex-row-reverse px-4 mb-2 text-muted ">Author: {this.props.author}</div>
            </div>
        )
    }
}
