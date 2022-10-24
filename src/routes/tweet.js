import { Router } from 'express';

import * as tweetController from '@/controllers/tweet';
import * as tweetValidations from '@/routes/validations/tweet';
import { cache, isAuthenticated, validate } from '@/middleware';

const router = Router();

router.route('/')
  .get(tweetController.getTweets)
  .post(tweetController.createTweet);

export default router;
