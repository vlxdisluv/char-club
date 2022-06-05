import * as Joi from 'joi';

type EnvironmentTypes = 'development' | 'staging' | 'production';
export let currentEnvironment: EnvironmentTypes;

export const loadConfiguration = (): Record<string, unknown> => {
  currentEnvironment = process.env.APP_ENVIRONMENT as EnvironmentTypes;

  return {
    nodeEnv: process.env.NODE_ENV,
  };
};

export const validationSchema = Joi.object({
  //ENV
  NODE_ENV: Joi.string().valid('development', 'staging', 'production').required(),
});
