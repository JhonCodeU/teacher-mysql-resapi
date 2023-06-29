import { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher } from '../../controllers/teachers.controller.js';
import { success, error } from "../../libs/response.js";
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - Id
 *       properties:
 *         cedula:
 *           type: string
 *           description: The cedula of the teacher
 *         fullName:
 *           type: string
 *           description: The full name of the teacher
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the teacher
 *         address:
 *          type: string
 *          description: The address of the teacher
 *         email:
 *           type: string
 *           description: The email of the customer
 *       example:
 *        cedula: "123456789"
 *        fullName: Juan Perez
 *        phoneNumber: 123456789
 *        address: Calle 123
 *        email: pepe@gmail.com
 */

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: The teachers managing API
 * /api/teacher:
 *   get:
 *     summary: Lists all the teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: The list of the teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: The created teacher.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       500:
 *         description: Some server error
 * /api/teacher/{id}:
 *   get:
 *     summary: Get the teacher by id
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 *     responses:
 *       200:
 *         description: The teacher response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: The teacher was not found
 *   put:
 *    summary: Update the teacher by the id
 *    tags: [Teachers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teacher id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Teacher'
 *    responses:
 *      200:
 *        description: The teacher was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Teacher'
 *      404:
 *        description: The teacher was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the teacher by id
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 *
 *     responses:
 *       200:
 *         description: The teacher was deleted
 *       404:
 *         description: The teacher was not found
 */

router.get('/', (req, res) => {
  getTeachers(req, res).then((data) => {

    if (data.sqlMessage) {
      return error(req, res, data.sqlMessage, 500);
    }

    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err);
  });
});

router.get('/:id', (req, res) => {
  getTeacherById(req, res).then((data) => {
    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err, 404);
  });
});

router.post('/', (req, res) => {
  createTeacher(req, res).then((data) => {
    success(req, res, data, 201);
  }).catch((err) => {
    error(req, res, err);
  });
});

router.put('/:id', (req, res) => {
  updateTeacher(req, res).then((data) => {
    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err);
  });
});

router.delete('/:id', (req, res) => {
  deleteTeacher(req, res).then((data) => {
    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err);
  });
});

export default router;