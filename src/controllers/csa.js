import createError from 'http-errors';

import db from '@/database';

/**
 * POST /csas
 * Create csa request
 */
export const createCsa = async (req, res, next) => {
  try {
    // Create csa
    const csaData = req.body;
    console.log(csaData)
    const csa = await db.models.csas
      .create(csaData, {
        fields: ['nameCSA', 'urlBase'],
      });

    // Save this csa to redis
   
    return res.status(201).json(csa);
  } catch (err) {
    console.log(err)
    return next(err);
  }
};

/**
 * GET /csas
 * List csas with pagination
 */
export const getCsas = async (req, res, next) => {
  try {
    const { page = 1, perPage = 10 } = req.query;
    const offset = page * perPage - perPage;

    const csaListResponse = await db.models.csas
      .findAndCountAll({
        offset,
        limit: perPage,
        order: [['createdAt', 'DESC']],
      });

   

    const totalPage = Math.ceil(csaListResponse.count / perPage);
    const response = {
      ...csaListResponse, page, totalPage, perPage,
    };
    return res.json(response);
  } catch (err) {
    console.log(err)
    return next(err);
  }
};

/**
 * GET /csas/:id
 * Get csa by id
 */
export const getcsaById = async (req, res, next) => {
  try {
    const { id: csaId } = req.params;

    const csa = await db.models.csas
      .findOne({
        where: { id: csaId },
      });
    if (!csa) {
      return next(createError(404, 'There is no csa with this id!'));
    }

    // Save this csa to redis
  
    return res.status(200).json(csa);
  } catch (err) {
    return next(err);
  }
};

/**
 * DELETE /csas/:id
 * Delete csa request
 */
export const deletecsa = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { id: csaId } = req.params;

    const csa = await db.models.csa.findOne({ where: { id: csaId, userId } });
    if (!csa) {
      return next(createError(404, 'There is no csa with this id!'));
    }

    // Remove this csa from redis, if exist
   
    await csa.destroy();
    return res.status(204).send();
  } catch (err) {
    return next(err);
  }
};
