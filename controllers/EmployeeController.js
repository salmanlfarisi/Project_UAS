// import model student
const Employee = require("../models/Employee.js")

class EmployeeController {
    async index(req, res) {
        // TODO 4: Tampilkan data employees
        const employees = await Employee.all();

        const data = {
            message: "Menampilkan data employees",
            data: employees
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        const { name, gender, phone, address, email, status } = req.body
        const employees = await Employee.create(req.body);
        const data = {
            message: "Menambahkan data student",
            data: employees
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        /**
         * check id students
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;
        const { name } = req.body;

        employees[id] = name;

        const data = {
            message: `Mengedit data employees id ${id}, nama ${name}`,
            data: employees
        };

        res.json(data);

        const employees = await Employee.find(id);

        if (employees) {
            // update data
            const employeeUpdate = await Employee.update(id, req.body);
            const data = {
                message: "Mengupdate data employees",
                data: employeeUpdate,
            };

            res.status(200).json(data);
        }
        else {
            // kirim data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        employees.splice(id, 1);

        const data = {
            message: `Menghapus data employees ${id}`,
            data: employees
        };
        res.json(data);



        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const employees = await Employee.find(id);

        if (employees) {
            // hapus data
            await Employee.delete(id);
            const data = {
                message: "Menghapus data employees",
            };

            res.status(200).json(data);
        }
        else {
            // data tidak ada
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employees = await Employee.find(id);

        if (employees) {
            const data = {
                message: "Menampilkan detail data employees",
                data: employees,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }

    }
}

// make an object EmployeeController
const object = new EmployeeController();

// export object
module.exports = object;