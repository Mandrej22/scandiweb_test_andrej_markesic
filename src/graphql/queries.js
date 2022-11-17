import {gql} from '@apollo/client';

export const CURRENCY_SYMBOLS = gql`
    query{
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
`;