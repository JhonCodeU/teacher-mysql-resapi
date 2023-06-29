import { getTeachers, getTeacherById, createTeacher, updateTeacher, deleteTeacher } from '../../controllers/teachers.controller.js';
import { success, error } from "../../libs/response.js";
import express from 'express';

const router = express.Router();

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

    if (data = "Internal server error") {
      return error(req, res, data, 500);
    }

    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err, 404);
  });
});

router.post('/', (req, res) => {
  createTeacher(req, res).then((data) => {

    if (data = "Internal server error") {
      return error(req, res, data, 500);
    }

    success(req, res, data, 201);
  }).catch((err) => {
    error(req, res, err);
  });
});

router.patch('/:id', (req, res) => {
  updateTeacher(req, res).then((data) => {

    if (data = "Internal server error") {
      return error(req, res, data, 500);
    }

    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err);
  });
});

router.delete('/:id', (req, res) => {
  deleteTeacher(req, res).then((data) => {

    if (data = "Internal server error") {
      return error(req, res, data, 500);
    }

    success(req, res, data, 200);
  }).catch((err) => {
    error(req, res, err);
  });
});

export default router;