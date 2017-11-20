import React, { Component } from 'react';
const request = require('request');
const cheerio = require('cheerio');
//const crawler = require('crawler');

class Artikel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: undefined,
        };
        const updateContent = (error, response, body) => {
                console.log(body);
                this.setState({content: body});
        };
        request.get({url: 'https://www.gsmarena.com/'}, updateContent);
        
        console.log(this.state.content);
        /*if (this.state.content) {
            const $ = cheerio.load(this.state.content);
        } else {
            console.log('Cheerio Error');
        }*/
        /*const lnk = $('.news-item');
        var i = 0;
        console.log('Headlines of: www.gsmarena.com')
        lnk.each(function(){
            if(i <= 5){
                console.log(i + '.', $(this).children('a').children('h3').text());
                console.log('http://www.gsmarena.com/' + $(this).children('a').attr('href'));
                console.log();
                i++;
            }
        });*/
    }

    render() {
        return (
            <div>
                <p>{}</p>
            </div>
        );
    }
}

export default Artikel;
