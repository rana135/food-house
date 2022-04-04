import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='accordion'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is Context API?</Accordion.Header>
    <Accordion.Body>
    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is semantic tags?</Accordion.Header>
    <Accordion.Body>
    Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.
Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.New HTML5 semantic tags to structure the document in a meaningful way are:header,nav,article,section,
aside.
<footer></footer>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;