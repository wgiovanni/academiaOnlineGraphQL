import { IResolvers } from 'graphql-tools';

const query : IResolvers = {
    Query: {
        students():string {
            return 'Lista de estudiantes';
        }
    }
}

export default query;