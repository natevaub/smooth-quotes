import { useState } from "react";
import { Quote, quotes } from "../QuotesDataBase";
import SpotifyPlaylist from './SpotifyEmbed'

export function RandomQuote() : JSX.Element {
    const generateQuote = (): Quote => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        return randomQuote
    };

    const [quote, setQuote] = useState<Quote>(
        generateQuote()
    );

    // Function to generate a random quote

    return (
        <div className="container">
            <div className="container-text">
                <h2>{quote.text}</h2>
                <p>{quote.author}</p>
            </div>
            <div className="button-container">
            <button
            className="new-quote-button"
            onClick={() => {
                setQuote(generateQuote())
            }}
            >Generate New Quote!</button>
            </div>
			<div className="embeded">
				<SpotifyPlaylist />
			</div>
			
        </div>
    )
};
