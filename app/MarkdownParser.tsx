// components/MarkdownParser.tsx
import React from 'react';
import {marked} from 'marked';

interface MarkdownParserProps {
    content: string;
}

const MarkdownParser: React.FC<MarkdownParserProps> = ({content}) => {
    const createMarkup = () => {
        return {__html: marked(content)};
    };

    return (
        <div className="prose max-w-max prose-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
             dangerouslySetInnerHTML={createMarkup()}/>
    );
};

export default MarkdownParser;
