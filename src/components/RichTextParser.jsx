
import serialize from '@/utils/serializeDefaultRichText';
import serializeLexicalRichText from '@/utils/serializeLexicalRichText';
import React from 'react';


export default function ({ className, content, customClassNames, type = 'default' }) {

    if ((type === 'default' && !content) || (type === 'lexical' && !content?.jsonContent?.root?.children)) {
        return null;
    }

    return (
        <div className={`${[className].filter(Boolean).join(' ')} richText`}>
            {type === 'lexical' ? serializeLexicalRichText(content.jsonContent.root.children) : ''}
            {type === 'default' ? serialize(content) : ''}
        </div>
    );
};