import React, { Component } from 'react';
const request = require('request');
const cheerio = require('cheerio');
const max = 5;

let obj = new Array(max);

class Artikel extends Component {
    constructor(props) {
        super(props);
        //let cn = [];
        this.state = {
            content: undefined,
        };

        function getContent(uri, i, thou) {
            const update = (error, response, body) => {
                const $ = cheerio.load(body);
                obj.conten = $('#review-body').children('p').text();
                console.log(i, obj.conten);
                const c = obj.map((obj) =>
                    <div>
                        <h3><a href={obj.link}>{obj.title}</a></h3>
                        <p>{obj.conten}</p>
                    </div>
                );
                console.log(c.toString());
                thou.state.content = c;
            };
            request.get({url: uri}, update);
        }

        const updateContent = (error, response, body) => {
            console.log(body);
            //this.setState({content: body});
            const $ = cheerio.load(body);
            const lnk = $('.news-item');
            let i = 0;
            //let links = [];
            //console.log(c);
            lnk.each(function(){
                if(i < max){
                    obj[i] = {
                        title : $(this).children('a').children('h3').text(),
                        link : 'http://www.gsmarena.com/' + $(this).children('a').attr('href'),
                    };
                    i++;
                }
            });
            for(i = 0; i < max; i++){
                obj.conten = getContent(('http://www.gsmarena.com/' + $(lnk[i]).children('a').attr('href')), i, this);
            }
            const c = obj.map((obj) =>
                <div>
                    <h3><a href={obj.link}>{obj.title}</a></h3>
                    <p>{obj.conten}</p>
                </div>
            );
            this.setState({content: c});
        };
        request.get({url: 'https://www.gsmarena.com/'}, updateContent);
    }

    render() {
        return (
            <div className="article-body">
                <h1>'Headlines of: www.gsmarena.com'</h1>
                {this.state.content}
            </div>
        );
    }
}

export default Artikel;
