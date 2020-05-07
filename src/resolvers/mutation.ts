import { IResolvers } from 'graphql-tools';
import _ from 'lodash'; 
import { database } from '../data/data.store';
const mutation : IResolvers = {
    Mutation: {
        courseNew(__:void, { course }): any {
            const itemCourse = {
                id: String(database.courses.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: [],
            }

            if(database.courses.filter(itemCours => itemCours.title === itemCourse.title).length === 0){
                database.courses.push(itemCourse);
                return itemCourse;
            }

            return {
                id: '-1',
                title: `El curso ya existe con este titulo ${course.title}`,
                description: '',
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                path: '',
                teacher: '',
                reviews: [],
            }
        }
    }
}

export default mutation;