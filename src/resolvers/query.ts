import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
const query : IResolvers = {
    Query: {
        students(): any {
            return database.students;
        },
        student(__: void, {id}): any {
            const result = database.students.filter(student => student.id === id)[0];
            if (result === undefined) {
                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el ID ${id}`,
                    email: '',
                    courses: []
                };
            }
            return result;
        },
        courses(): any {
            return database.courses;
        },
        course(__: void, {id}): any {
            const result = database.courses.filter(course => course.id === id)[0];
            if (result === undefined) {
                return {
                    id: '-1',
                    title: `No se ha encontrado el curso con el ID ${id}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'ALL',
                    path: '',
                    teacher: '',
                    reviews: []
                };
            }
            return result;
        },
    }
}

export default query;