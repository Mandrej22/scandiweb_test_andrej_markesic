import React from 'react';
import Header from '../components/header';


class Layout extends React.Component{ 
    render(){
        return(
            <div>
            <Header/>
            <div className='main'>
                {this.props.children}
            </div>
            </div>
        );    
    }

}

export default Layout;
