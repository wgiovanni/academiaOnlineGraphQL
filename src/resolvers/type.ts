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
    },
    Course: {
        students: parent => {
            const studentsList: Array<any> = [];
            const idCourse = parent.id;
            database.students.map((student:any) => {
                if(student.courses.filter((id:any) => id === idCourse) > 0) {
                    studentsList.push(student)
                }
            });
            return studentsList;
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
}

export default type;