/**
 * Copyright {Project Name} 2022 All Rights Reserved.
 * Author: Miguel Correlo
 * Node module: @lib/utils
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { BaseError } from './api.errors';
import { Logger } from '../logger';

class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await Logger.error('Error Handler: ', err);
    /* await sendMailToAdminIfCritical();
    await sendEventsToSentry(); */
  }

  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }

    return false;
  }
}

export const errorHandler = new ErrorHandler();
