import React from 'react'

export default function SearchResult(props) {
    const { result } = props;
    return (
        <div className="resultContainer">
            <a href={`https://www.dictionary.com/browse/${result.word}`} target="_blank" rel="noopener noreferrer" className="word">
                {result.word}
            </a>
            <div className="definition">
                {result.defs && result.defs.length > 0 && result.defs[0]}
            </div>
        </div>
    )
}
