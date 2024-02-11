import React from 'react'

const SingleProfile = ({single}) => {
  return (
    <div>
      <div style={{"display":"grid","marginLeft":"200px"}}>
            <section style={{"display":"flex","width":"80%"}}>
                <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg" alt="" style={{"width":"800px", "height":"240px"}}/>
            </section>
            <section style={{"width":"80%"}}>
<h1>hello</h1>
<h2>World</h2>
<h3>this is profile</h3>
            </section>
        </div>
    </div>
  )
}

export default SingleProfile
