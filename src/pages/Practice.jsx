import React from 'react';
import PracticeOption from '../components/Practiceoption';
import formsImage from '../assets/pimages/forms.png';
import tableImage from '../assets/pimages/tables.png';
import ecomm from '../assets/pimages/ecomm.png';
import blogg from '../assets/pimages/blogg.png';
import movie from '../assets/pimages/movies.png';
import notemaker from '../assets/pimages/note-maker.png';
import gird from '../assets/pimages/gird.png';
const PracticePage = () => {
    const practiceOptions = [
        {
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
            description: 'A dynamic blog website built using NextJs, React, MongoDB, TailwindCSS, and deployed on Vercel.',
            imageUrl: blogg,
            link: 'https://bloggerszone.vercel.app/',
        },
        {
            title: 'MovieWobbie',
            description: 'A staic movie website built using HTML, CSS and deployed on Vercel.',
            imageUrl: movie,
            link: 'https://mern-blogapp-kusp.vercel.app/',
        },
        {
            title: 'Note Maker',
            description: 'A note maker built using HTML, CSS, Js and deployed on Netlify.',
            imageUrl: notemaker,
            link: 'https://note-maker.netlify.app/',
        },
        {
            title: 'Infinte Scroll',
            description: 'An infinite scroll built using React, TailwindCSS',
            imageUrl: gird,
            link: '/practice/grid',
        }

    ];

    return (
        <div className="container mx-auto px-4 py-8 ">
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
                To become an exceptional automation engineer, online courses and tutorials are insufficient. What truly sets apart a great automation engineer is a ton of hands-on practice. Sadly, many online courses merely offer lectures and scarce course materials, leaving students struggling to apply their knowledge in real-life scenarios or interviews.

                At <span style={{ color: 'orange', }}   >Code</span><span style={{ color: 'blue', }}  >Nexus</span>, we take a different approach. We understand the importance of practical implementation. Therefore, we provide our students with dedicated live practice apps tailored for various QA automation verticals such as UI/Web, Mobile Apps, and API services.

                These exclusive apps empower our students to implement their newly acquired skills in a supportive environment. This hands-on experience enables them to confidently apply automation concepts in their workplace and excel in interviews. At <span style={{ color: 'orange', }}   >Code</span><span style={{ color: 'blue', }}  >Nexus</span>, we believe in the power of practice to nurture exceptional automation engineers, and our live practice apps play a pivotal role in achieving that goal.
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
