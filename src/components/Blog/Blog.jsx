import React, { createContext, createRef } from 'react';
import './Blog.css'
import Pdf from "react-to-pdf";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LoaderIcon from '../../Pages/LoaderIcon/LoaderIcon';


const Blog = () => {
    const { loading } = createContext(AuthContext)

    if (loading) {
        return <LoaderIcon></LoaderIcon>
    }
    const ref = createRef();

    return (
        <div className="banner-pdf">
            <section className="py-2 dark:bg-gray-800 dark:text-gray-50">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">You want to Download this page!</h1>
                    <Pdf targetRef={ref} filename="food-fusion.pdf">
                        {({ toPdf }) => <button className='pdf-banner text-2xl' onClick={toPdf}><p>Get the Pdf Click Here</p></button>}</Pdf>
                </div>
            </section>
            <div ref={ref} className="wrapper">
                <div className="question">
                    Question 1
                    <div className="foreground">
                        Tell&nbsp;&nbsp;us&nbsp;&nbsp;differences&nbsp;&nbsp;between&nbsp;&nbsp;uncontrolled&nbsp;&nbsp;and&nbsp;&nbsp;controlled&nbsp;&nbsp;components?
                    </div>
                </div>
                <p>
                    Controlled and uncontrolled components are terms used to describe React components that render HTML form elements. The primary difference between them is how they handle their value and state
                </p>
                <p>
                    A <strong>controlled component</strong> is one that takes its current value through props and notifies changes through callbacks like onChange21. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.</p>
                <p>
                    A <strong>uncontrolled component</strong> is one that stores its own state internally, and we query the DOM using a ref to find its current value when we need it21. This is a bit more like traditional HTML.
                </p>
                <br />
                <br />
                <br />
                <br />
                <hr />
                <div className="question">
                    Question 2
                    <div className="foreground">
                        How&nbsp;&nbsp;to&nbsp;&nbsp;validate&nbsp;&nbsp;React&nbsp;&nbsp;props&nbsp;&nbsp;using&nbsp;&nbsp;PropTypes ?&nbsp;&nbsp;
                    </div>

                </div>
                <p>
                    React props are attributes that you can pass from one component to another. They are read-only and can be of different types, such as numbers, strings, functions, objects, and arrays1. To validate React props using PropTypes,  we need to do the following steps:
                </p>
                <li>Install the prop-types library using npm or yarn. This library provides a range of validators for checking the types and values of props</li>
                <li>Import PropTypes from "prop-types" in your component file.</li>
                <li>Define the propTypes property on our component and assign it an object with the prop names and validators as key-value pairs</li>
                <li>Optionally, you can also define the defaultProps property on your component and assign it an object with the prop names and default values as key-value pairs</li>
                <br />
                <br />
                <br />
                <br />
                <hr />
                <div className="question">
                    Question 3
                    <div className="foreground">
                        Tell&nbsp;&nbsp;us&nbsp;&nbsp;the&nbsp;&nbsp;difference&nbsp;&nbsp;between&nbsp;&nbsp;nodejs&nbsp;&nbsp;and&nbsp;&nbsp;expressjs.
                    </div>
                </div>
                <p>
                    <strong> Node.js</strong> and <strong>Express.js</strong> are not comparable in terms of functionality, because they are different in terms of abstraction level
                </p>
                <p><strong>Node.js</strong> is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used to run JavaScript code outside of a browser, typically for building server-side applications13. <strong>Node.js</strong> provides a low-level API for working with HTTP requests, responses, streams, buffers, events, etc. <strong>Node.js</strong> also comes with a built-in module system called npm that allows developers to install and use thousands of third-party packages</p>
                <p><strong>Express.js</strong> is a web framework based on <strong>Node.js</strong> that simplifies the development of web applications using <strong>Node.js</strong>. <strong>Express.js</strong> provides features such as middleware, routing, templating, error handling, static file serving, etc. that make it easier to organize and structure your code and handle common web development tasks. <strong>Express.js</strong> is one of the most popular frameworks in the <strong>Node.js</strong> ecosystem and has many extensions and plugins available</p>
                <p> <strong>In summary</strong> , <strong>Node.js</strong> is a platform for running JavaScript code on servers, while <strong>Express.js</strong> is a framework for building web applications using <strong>Node.js</strong>. We can use <strong>Node.js</strong> without <strong>Express.js</strong>, but we cannot use <strong>Express.js</strong> without <strong>Node.js</strong></p>
                <br />
                <br />
                <br />
                <br />
                <hr />
                <div className="question">
                    Question 4
                    <div className="foreground">
                        What&nbsp;&nbsp;is&nbsp;&nbsp;a&nbsp;&nbsp;custom&nbsp;&nbsp;hook,&nbsp;&nbsp;and&nbsp;&nbsp;why&nbsp;&nbsp;will&nbsp;&nbsp;we&nbsp;&nbsp;create&nbsp;&nbsp;a&nbsp;&nbsp;custom&nbsp;&nbsp;hook?
                    </div>
                </div>
                <p>
                    A <strong>custom hook</strong> is a function that starts with the word “use” and can call other hooks inside it. <strong>Custom hook</strong>s allow us to reuse stateful logic between different components without changing their structure124. <strong>Custom hook</strong>s can return anything we want, such as values, functions, or effects.
                </p>
                <p>We might create a <strong>custom hook</strong> when we want to extract some common logic from our components and share it with others. For example, we might create a <strong>custom hook</strong> for fetching data from an API, for accessing the local storage, for subscribing to an event, or for validating a form. Creating a <strong>custom hook</strong> can help us avoid code duplication, improve readability, and simplify testing.</p>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Blog;