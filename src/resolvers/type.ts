import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash'; 
const type : IResolvers = {
    Student: {
        courses: parent => {
            const coursesList : Array<any> = [];
            parent.courses.map((course:String) => {
                coursesList.push(_.filter(database.courses, ['id', course])[0])
            });

            return coursesList;
        }
    }
}

export default type;