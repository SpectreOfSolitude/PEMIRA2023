const collection = require('../db');
const getUniqueCode = require('../utils/getUniqueCode');
const insertStudent = require('../utils/insertStudent');
const sendMail = require('../utils/sendMail');

const studentServices = {
    checkNIMAvailable: async (req, res) => {
        const NIM = req.body.NIM;
        const query = { NIM };

        const student = await collection.Student.findOne(query);
        if (student) {
            if(student.isVote) {    
                console.log('Mahasiswa sudah melakukan voting');
                res.status(200).json({
                    status: 200,
                    message: 'Rejected',
                    data: {
                        response:'Mahasiswa sudah melakukan voting',
                    }
                });
                return
            }
        }    

        const uniqueCode = getUniqueCode();
        await insertStudent(NIM, uniqueCode);
        await sendMail(NIM, uniqueCode);

        console.log('Mahasiswa belum melakukan voting, unique code telah dikirim ke email');
        res.status(200).json({
            status: 200,
            message: 'Success',
            data: {
                response: 'Mahasiswa belum melakukan voting, unique code telah dikirim ke email'
            }
        });
    },

    validateUniqueCode: async (req, res) => {
        const NIM = req.body.NIM;
        const uniqueCode = req.body.uniqueCode;
        console.log(NIM)
        console.log(uniqueCode)

        const query = { NIM, uniqueCode };

        const isValid = await collection.Student.findOne(query);
        console.log(isValid);
        if (isValid) {
            console.log('Unique code valid');
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: {
                    response: 'Unique code valid'
                }
            });
        } else {
            console.log('Unique code invalid');
            res.status(200).json({
                status: 200,
                message: 'Rejected',
                data: {
                    response: 'Unique code invalid'
                }
            });
        }
    },

    updateIsVote: async (req, res) => {
        const NIM = req.body.NIM;
        const query = { NIM };

        await collection.Student.updateOne(query, { $set: { isVote: true } });
        res.status(200).json({
            status: 200,
            message: 'Success',
            data: {
                response: 'Mahasiswa berhasil melakukan voting'
            }
        });
    }
}

module.exports = studentServices;