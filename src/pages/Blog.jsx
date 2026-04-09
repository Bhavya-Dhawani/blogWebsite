import React from 'react';
import Markdown from 'react-markdown'

const Blog = () => {

    const markDown = "# hey **How are you**"

    return (
        <div style={{color: "white"}} className='page'>
            <Markdown>
                {markDown}
            </Markdown>
        </div>
    )
}

export default Blog
