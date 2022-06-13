/**
 * Name: Identity Access Management
 * Copyright {Project Name} 2022 All Rights Reserved.
 * Author: Miguel Correlo
 * Node module: @project/sdk
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

export interface IUser {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
