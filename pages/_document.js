import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class myDocument extends Document{
    render(){
        return(
            <html lang="en">
                <Head>
                    <meta name="desctiption" content="a site for portfolio" />
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link
                        rel="stylesheet"
                        href="/static/nprogress.min.css"
                    ></link>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body{
                        font-family: 'Open Sans', sans-serif; 
                    }
                `}</style>
            </html>
        )
    }
}