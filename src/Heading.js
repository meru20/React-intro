
const HeadingComponent = (props) => {
    
    //let text = 'this is my Heading Component from another file!'
    console.log(props);
    return <h1>{props.h1Text}</h1>;
  
}

export default HeadingComponent;