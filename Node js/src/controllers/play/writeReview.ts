import { Request, Response } from 'express';
import { writeReviewInpValidator } from '../../validation/inputValidators';
import { passport, prisma } from '../../config';
import { BadRequestErr, NotFoundErr } from '../../helpers/errors';
import { escape, unescape } from '../../helpers';
import { admins } from '@prisma/client';
import {
  middlewareWrapper,
  reviewAdminAuth,
  storeValidatedInputs,
} from '../../middlewares';

const controller = [
  passport.authenticate('adminJwt', { session: false }),

  middlewareWrapper(reviewAdminAuth),

  middlewareWrapper(storeValidatedInputs(writeReviewInpValidator)),

  middlewareWrapper(middleware),
];

export { controller as writeReview };

async function middleware(req: Request, res: Response) {
  const reqAdminObj = req.user as admins;

  if (!Number.isFinite(+req.params.playId)) {
    throw new BadRequestErr('شناسه نمایش معتبر نیست.');
  }

  const play = await prisma.plays.findUnique({
    where: { id: +req.params.playId },
  });

  if (play === null) {
    throw new NotFoundErr('نمایشی با این شناسه یافت نشد.');
  }

  const duplicateReview = await prisma.play_reviews.findFirst({
    where: { play_id: play.id },
  });

  if (duplicateReview !== null) {
    throw new BadRequestErr('یک نقد از قبل برای نمایش ثبت شده است.');
  }

  const review = await prisma.play_reviews.create({
    data: {
      text: escape(res.locals.validBody.content) as string,
      writer_id: reqAdminObj.id,
      is_published: false,
      play_id: play.id,
    },
    select: {
      id: true,
      text: true,
      writer: {
        select: {
          id: true,
          full_name: true,
          profile_pic_url: true,
        }
      }
    }
  });

  res.json({
    message: 'نقد نمایش ثبت شد.',
    review,
  });
}
