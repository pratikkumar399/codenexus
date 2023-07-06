import React from 'react';
import PracticeOptionsList from './PracticeOptionsList';
import formsImage from '../assets/pimages/forms.png';

const PracticeOptionsList = () => {
    const practiceOptions = [
        {
            // src\assets\pimages\forms.png
            title: 'Pratice Forms',
            description: 'See how the forms work.',
            imageUrl: formsImage,
            link: '/practice/forms',
        },
        {
            title: 'Practice Tables',
            description: 'See how the tables work.',
            imageUrl: 'https://example.com/option2.jpg',
            link: '/practice/tables',
        },
        {
            title: 'E Commerce website',
            description: 'Open and explore how the E Commerce website works.',
            imageUrl: 'https://example.com/option3.jpg',
            link: '/option3',
        },
        {
            title: 'Option 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option4.jpg',
            link: '/option4',
        },
        {
            title: 'Option 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option4.jpg',
            link: '/option4',
        },
        {
            title: 'Option 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: 'https://example.com/option4.jpg',
            link: '/option4',
        },

    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {practiceOptions.map((option) => (
                <PracticeOption key={option.title} {...option} />
            ))}
        </div>
    );
};

export default PracticeOptionsList;
