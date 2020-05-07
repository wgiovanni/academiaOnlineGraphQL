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
        },
        courseEdit(__:void, { course }): any {
            const elementExist = _.findIndex(database.courses, function(o) {
                return o.id === course.id;
            });

            if(elementExist > -1) {
                const valorations = database.courses[elementExist].reviews;
                course.reviews = valorations;
                database.courses[elementExist] = course;
                return course;
            }

            return {
                id: '-1',
                title: `El curso no existe en la base de datos`,
                description: '',
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                path: '',
                teacher: '',
                reviews: [],
            }
        },
        courseDelete(__:void, { id }): any {
            const deleteCourse = _.remove(database.courses, function(course){
                return course.id === id;
            });

            if (deleteCourse[0] === undefined) {
                return {
                    id: '-1',
                    title: `El curso nose puede borrar porque no se ha encontrado ningun curso con ese ID`,
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

            return deleteCourse[0];
        }
    }
}

export default mutation;