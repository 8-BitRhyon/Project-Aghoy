-- Persist the learner's wrong-answer log (scenario, step, option chosen, day).
-- Client records these so a coach can see which lure fooled the learner; the
-- field was previously dropped on every save/load cycle.
ALTER TABLE training_progress ADD COLUMN wrong_answers TEXT NOT NULL DEFAULT '[]';
