import React, { Component } from 'react';
const request = require('request');
const cheerio = require('cheerio');
const max = 7;


class Artikel extends Component {
    constructor(props) {
        super(props);
        //let cn = [];
        this.state = {
            content: [],
        };

        let obj = new Array(max);

        function getContent(uri, i, thou) {
            const update = (error, response, body) => {
                const $ = cheerio.load(body);
                const k = $('#review-body').children('p').text().split(" ");
                for(let j = 0; j < 20; j++){
                    obj[i].conten += (k[j] + " ");
                }
                thou.setState({content : obj});
            };
            request.get({url: uri}, update);
        }

        const updateContent = (error, response, body) => {
            //console.log(body);
            const $ = cheerio.load(body);
            const lnk = $('.news-item');
            let i = 0;
            lnk.each(function(){
                if(i < max){
                    obj[i] = {
                        title : $(this).children('a').children('h3').text(),
                        link : 'http://www.gsmarena.com/' + $(this).children('a').attr('href'),
                        conten : '',
                        imguri : $(this).children('a').children('div').children('img').attr('src'),
                    };
                    i++;
                }
            });
            for(i = 0; i < max; i++){
                getContent(('http://www.gsmarena.com/' + $(lnk[i]).children('a').attr('href')), i, this);
            }
        };
        request.get({url: 'https://www.gsmarena.com/'}, updateContent);
    }

    render() {
        let cn = this.state.content.map((obj) =>
            <div key={obj.title} className={"col-sm-12 news-item"}>
                <div className={"col-sm-3"}><img src={obj.imguri} alt={obj.title} width={"240px"}/></div>
                <div className={"col-sm-9"}>
                    <h3><a href={obj.link}>{obj.title}</a></h3>
                    <p>{obj.conten}<a href={obj.link}>continue reading...</a></p>
                </div>
            </div>
        );

        return (
            <div className="article-body" id={"gsmarena"}>
                <h1>Top {max} Latest News of: <a href={"http://www.gsmarena.com"}>www.gsmarena.com</a></h1>
                {cn}
            </div>
        );
    }
}

export default Artikel;
