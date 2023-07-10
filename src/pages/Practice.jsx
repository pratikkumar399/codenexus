import React from 'react';
import PracticeOption from '../components/Practiceoption';
import formsImage from '../assets/pimages/forms.png';
import tableImage from '../assets/pimages/tables.png';
import ecomm from '../assets/pimages/ecomm.png';
import blogg from '../assets/pimages/blogg.png';
const PracticePage = () => {
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
            imageUrl: tableImage,
            link: '/practice/tables',
        },
        {
            title: 'E Commerce website',
            description: 'Open and explore how the E Commerce website works.',
            imageUrl: ecomm,
            link: 'https://thisrtlanding.vercel.app/',
        },
        {
            title: 'BloggersZone',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend purus sit amet odio condimentum maximus. Morbi id urna sed metus varius pretium vel et velit. Sed ullamcorper eu dui ac fringilla. ',
            imageUrl: blogg,
            link: 'https://bloggerszone.vercel.app/',
        }

    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <h1 className="text-3xl text-center font-bold mb-4">Practice Projects</h1>
            <p className="text-lg text-black mb-8 font-serif">
                Watching course and reading tutorials online will only get you so far. To become a great automation engineer, you’ll need a ton of practice. While most online courses provide the students with just the lectures and few course materials but to actually implement the newly acquired knowledge, they are left to scramble for themselves.

                Due to lack of this practice, students struggle to implement the new learnings at their work or struggle with answering interview questions. But at Rahul Shetty Academy, we want to have our students really implement their new knowledge and skills on our dedicated live practice apps which we have developed exclusively for our students.

                We have developed Live Practice apps for different verticals of QA automation like UI / Web, Mobile Apps and API services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {practiceOptions.map((option) => (
                    <PracticeOption key={option.title} {...option} />
                ))}
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
};

export default PracticePage;
