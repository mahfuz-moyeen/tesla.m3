import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl md:text-4xl text-center font-semibold my-14'><span className='border-b-2 border-b-orange-400'>
                Our <span className=' text-orange-400'>Blogs</span></span>
            </h1>

            <div className='w-10/12 mx-auto pb-10'>
                <div className=' bg-white rounded-lg p-5 my-10'>
                    <h1 className='text-2xl font-semibold text-orange-500'> <span className='border-b-2 border-b-orange-400'>What is Context API and how it work ?</span></h1>
                    <p className='p-3'>
                        In React we usually send data from one component to another. In that case, the data of one component has to be sent to another child component as props. Often there is a situation where the child component is much lower than our main component where your data is. <br /> Component A &#62; component B &#62; component C &#62; component D <br />
                        There may be many children doing this. Now if we want to take data from the main component or what we call a top-level component to a child component below many levels, then we have to take all the help from the parent of that child component and the parent of that parent to the data component or up to the top-level component. To pass data. This is called Props Drilling.
                        This is how React's Context API works. It also creates a stat at the very top level. And any child component you want can access that data later, without bothering the parent component in any way. And it's very simple. useContext is a react hook
                        <br />
                        in component A <br />
                        Export const MyContext = createContext (defaultValue);
                        <br />
                        parent section <br />
                        &#60; MyContext.Provider value=	&#123; / * some value * / &#125; &#62;
                        <br />
                        Component D Child section <br />
                        Const value = useContext (MyContext)
                    </p>
                </div>

                <div className=' bg-white rounded-lg p-5 my-10'>
                    <h1 className='text-2xl font-semibold text-orange-500'> <span className='border-b-2 border-b-orange-400'>What is Semantic tag ?</span></h1>
                    <p className='p-3'>
                        HTML (5) The 5th version of HTML. It was published by W3C in October 2014. Its main goal is to make the new multimedia support easy to read for people and easy to understand for computers and devices. Many features of HTML 5 have been built with devices like smartphones and tablets in mind. <br />
                        Examples of non-semantic elements: <br />
                        &#60; div &#62; and &#60; span &#62; - Tells nothing about its content. <br />
                            Examples of semantic elements: <br />
                            Semantic elements, such as &#60; header>, &#60; footer &#62;, &#60; article &#62; and &#60; section &#62; <br />
                                New form attributes, such as number, date, time, calendar and range <br />
                                New graphic elements: &#60; svg &#62; and &#60; canvas &#62; <br />
                                    New multimedia elements: &#60; audio &#62; and &#60; video &#62;
                                    </p>
                                    </div>

                                    <div className=' bg-white rounded-lg p-5 my-10'>
                                        <h1 className='text-2xl font-semibold text-orange-500'> <span className='border-b-2 border-b-orange-400'> Differences between Inline, Block and Inline Block</span></h1>
                                        <p className='p-3'>
                                            <span className='border-b-2 border-b-orange-400 text-orange-500'>Inline:</span>
                                            Inline elements sit one after the other, that is, holding a line. They always sit side by side, occupying as much space as needed. Some inline elements are: &#60;a &#62; ,&#60;b &#62;, &#60;big &#62;, &#60;i &#62;, &#60;small &#62;, &#60;img &#62; &#60;span &#62; etc. <br />
                                            <span className='border-b-2 border-b-orange-400 text-orange-500'>Block:</span>
                                            Block elements basically cover all the places of the element. These elements always start from a new line. Usually the block element can have 2 inline or block elements inside. Some block elements are: &#60; p &#62;, &#60; h1 &#62;, to &#60; h6&#62;, &#60; ul &#62;,&#60; ol &#62;,&#60; div &#62;,&#60; hr &#62;,&#60; blockquote &#62;, etc. <br />
                                            <span className='border-b-2 border-b-orange-400 text-orange-500'>Inline-Block:</span>
                                            When the properties of a block can be applied by keeping an element inline, then that element is basically called Inline-Block element. In this case we use display: inline-block Css. And I also use the CSS of block elements.
                                        </p>
                                        <div className='my-5'>
                                            <div className=' bg-orange-500 text-center p-1'>Block</div>
                                            <div className='my-5'>
                                                <div className=' inline mx-1 bg-indigo-500 text-center p-1'>Inline</div>
                                                <div className=' inline mx-1 bg-indigo-500 text-center p-1'>Inline</div>
                                                <div className=' inline mx-1 bg-indigo-500 text-center p-1'>Inline</div>
                                            </div>
                                            <div className=' inline-block mx-1 p-1 text-center bg-green-500'>Inline-Block</div>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                );
};

                                export default Blogs;