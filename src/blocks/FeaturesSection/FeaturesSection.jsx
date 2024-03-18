import React from 'react';

const FeaturesSection = ({features}) => {
    // Splitting the features array into roughly equal parts for a 3 column layout
    const splitFeatures = (features, numColumns) => {
        const perColumn = Math.ceil(features?.length / numColumns);
        let output = [];

        for (let i = 0; i < features?.length; i += perColumn) {
            output.push(features.slice(i, i + perColumn));
        }

        return output;
    };

    const columns = features?.length > 6 ? 3 : (features?.length > 3 ? 2 : 1);
    const dividedFeatures = splitFeatures(features, columns);


    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <div className={`grid grid-cols-1 md:grid-cols-${columns ? columns : 3} gap-4`}>
                {dividedFeatures?.map((featureColumn, index) => (
                    <div key={index} 
                        className={`${ index < dividedFeatures.length - 1 ? ' md:border-r' : ''} border-white pl-4`}
                    >
                        <ul className=' list-disc'>
                            {featureColumn?.map((feature, featureIndex) => (
                                <li key={featureIndex} className="mb-2"> {feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FeaturesSection;