/**
 * Copyright {Project Name} 2022 All Rights Reserved.
 * Author: Miguel Correlo
 * Node module: @lib/utils
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { APIError } from './api.errors';
import { HttpStatusCode } from './errors.interface';

const messages = {
  AUTH_EMAIL_VALIDATION: new APIError('Email Validation', HttpStatusCode.BAD_REQUEST, 'Invalid Email!', true),
  AUTH_INVAID_SESSION: (param: string) => new APIError('Get Session', HttpStatusCode.NOT_FOUND, `Session(${ param }) not found`, true),
  AUTH_INVALID_HEADER: new APIError('Authorization Header', HttpStatusCode.UNAUTHORIZED, 'Missing Authorization Header', true),
  AUTH_INVALID_SOURCE: new APIError('Authentication Source', HttpStatusCode.BAD_REQUEST, 'Invalid Authentication Source!', true),
  AUTH_INVALID_TOKEN: new APIError('Authorization Header', HttpStatusCode.UNAUTHORIZED, 'Invalid Auth Token!', true),
  AUTH_SIGNIN: new APIError('Signup', HttpStatusCode.INTERNAL_SERVER, 'Error While User is Trying Signup', false),
  AUTH_UNAUTHORIZED: new APIError('Authentication', HttpStatusCode.UNAUTHORIZED, 'Invalid Authentication Credentials', true),
  USER_ALREADY_EXISTS: new APIError('Unique User', HttpStatusCode.BAD_REQUEST, 'User Already Exists!', true),
  USER_NOT_FOUND: (param: string) => new APIError('Get User', HttpStatusCode.NOT_FOUND, `User(${ param }) not found`, true),
};

export default messages;
