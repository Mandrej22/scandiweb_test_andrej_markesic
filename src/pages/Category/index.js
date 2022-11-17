import React from 'react';
import {gql} from 'graphql-tag';
import {Query} from '@apollo/client/react/components';

const CURRENCY_SYMBOLS = gql`
    query Currency{
        category{
        name
        products{
            prices{
            currency{
                symbol
            }
            }
        }
        }
    }
`
;


class Category extends React.Component{
    render(){
        <Query query={CURRENCY_SYMBOLS}>
            {({loading, error , data}) =>{
                if(error) return <h1>Error</h1>;
                if(loading || !data) return <h1>Loading...</h1>;
               
                return <h1>{data.query}</h1>
                
            }}
        </Query>
        console.log(CURRENCY_SYMBOLS)
        return(
          
            <h1>Category</h1>
    
        );
    }
}

export default Category;
